#!/usr/bin/env zx

import 'zx/globals'
import Parser from 'rss-parser'
import fs from 'fs-extra'
import { to } from 'await-to-js'

const rssParser = new Parser()

// 格式 caomeiyouren/rss-impact-server
let sourceRepos = process.env.SOURCE_REPOS?.split('\n')?.map((repo) => repo.trim())?.filter(Boolean) || []
// 同步 caomeiyouren 仓库下 7 天内的镜像
const NAMESPACE = 'caomeiyouren'
const FILTER_TIME = 7 * 24 * 60 * 60
const caomeiyourenSourceReposUrl = new URL(`https://rsshub.cmyr.dev/dockerhub/repositories/${NAMESPACE}?limit=100&filter_time=${FILTER_TIME}`).toString()
const [sourceReposError, caomeiyourenSourceReposResp] = await to(rssParser.parseURL(caomeiyourenSourceReposUrl))
if (sourceReposError) {
    console.error(`Error: ${sourceReposError}`)
}
// 去重
sourceRepos = [...new Set([...sourceRepos, ...(caomeiyourenSourceReposResp?.items || []).map((repo) => repo.title.trim()).filter(Boolean).map((item) => `${NAMESPACE}/${item}`)])]
if (!sourceRepos?.length) {
    console.error('Error: SOURCE_REPOS environment variable is not set or is empty.')
    process.exit(1)
}

console.log(`sourceRepos: ${sourceRepos.join('\n')}`)

function parseDockerUrl(url: string) {
    const regex = /^docker:\/\/([^:]+):([^@]+)@(.+)$/
    const match = url.match(regex)
    if (!match) {
        throw new Error('Invalid Docker URL format')
    }
    return {
        username: match[1],
        password: match[2],
        registry: match[3],
    }
}

// 格式 docker://username:password@registry.example.com
const destinationCredentials = process.env.DESTINATION_CREDENTIALS?.split('\n')?.filter(Boolean).map((line) => parseDockerUrl(line)) || []

if (!destinationCredentials?.length) {
    console.error('Error: DESTINATION_CREDENTIALS environment variable is not set or is empty.')
    process.exit(1)
}

const sourceTransport = 'docker'
const destinationTransport = 'docker'
const limit = parseInt(process.env.SYNC_LIMIT) || 5
const syncFormat = 'v2s2'
const filterTime = (parseInt(process.env.SYNC_FILTER_TIME) || 2) * 24 * 60 * 60 // 48 hours in seconds 172800
const fallbackOs = process.env.SYNC_FALLBACK_OS || 'linux'
const fallbackArch = process.env.SYNC_FALLBACK_ARCH || 'amd64'

function getPlatformByTag(tag: string) {
    const lowerTag = tag.toLowerCase()
    let arch = fallbackArch
    let os = fallbackOs

    if (lowerTag.includes('arm64') || lowerTag.includes('aarch64')) {
        arch = 'arm64'
    } else if (lowerTag.includes('armv7') || lowerTag.includes('arm/v7')) {
        arch = 'arm'
    } else if (lowerTag.includes('armv6') || lowerTag.includes('arm/v6')) {
        arch = 'arm'
    } else if (lowerTag.includes('amd64') || lowerTag.includes('x86_64')) {
        arch = 'amd64'
    } else if (lowerTag.includes('386') || lowerTag.includes('i386')) {
        arch = '386'
    } else if (lowerTag.includes('s390x')) {
        arch = 's390x'
    } else if (lowerTag.includes('ppc64le')) {
        arch = 'ppc64le'
    }

    if (lowerTag.includes('windows')) {
        os = 'windows'
    }

    return { os, arch }
}

function shouldFallbackToSinglePlatform(error: unknown) {
    const message = String(error || '').toLowerCase()
    return message.includes('blob type invalid')
        || message.includes('manifest list')
        || message.includes('copying system image from manifest list')
        || message.includes('no image found in image index')
}

let dockerTags = ''
const filteroutRegex = /:(.*\.sig|.*window|.*nano|github.*|.*develop|.*beta|.*alpha|test|nightly.*|.*rc\.|.*rc-)/
for (const sourceRepo of sourceRepos) {
    console.log(`Syncing ${sourceRepo} to multiple destinations`)
    const search = new URLSearchParams({
        filter_time: filterTime.toString(),
        limit: '20',
        // filterout: filteroutRegex.source,
    })
    const rssUrl = new URL(`https://rsshub.cmyr.dev/dockerhub/tag/${sourceRepo}?${search}`).toString()

    const [error, rssResp] = await to(rssParser.parseURL(rssUrl))
    if (error) { // 如果出现异常，跳过本次循环
        console.error(`error: ${error}`)
        continue
    }
    const tags = (rssResp?.items || []).slice(0, limit)
        .map((item) => item.guid.split('@')[0])
        .filter((tag) => !filteroutRegex.test(tag)) || []

    console.log(`The tag to be synchronized is ${tags.join(', ')}`)

    for (const tag of tags) {
        const [namespace, projectName, rawTag] = tag.split(/:|\//)
        const sourceImage = tag
        // if (filteroutRegex.test(tag)) { // 过滤掉一些不想要的 tag
        //     continue
        // }
        for (const { registry, username, password } of destinationCredentials) {
            const destinationImage = `${registry}/${projectName}:${rawTag}`
            try {
                console.log(`Start synchronizing ${sourceImage} to ${destinationImage}`)
                await $`skopeo copy --format ${syncFormat} --dest-compress --src-tls-verify=false --dest-tls-verify=false --dest-creds=${username}:${password} ${sourceTransport}://${sourceImage} ${destinationTransport}://${destinationImage}`
                console.log(`Synced ${sourceImage} to ${destinationImage}`)
                dockerTags += destinationImage
                dockerTags += '\n'
            } catch (error2) {
                console.error(`exec error: ${error2}`)
                if (!shouldFallbackToSinglePlatform(error2)) {
                    continue
                }
                try {
                    const { os, arch } = getPlatformByTag(tag)
                    console.log(`Retry with single platform ${os}/${arch}: ${sourceImage} -> ${destinationImage}`)
                    await $`skopeo copy --format ${syncFormat} --dest-compress --override-os ${os} --override-arch ${arch} --src-tls-verify=false --dest-tls-verify=false --dest-creds=${username}:${password} ${sourceTransport}://${sourceImage} ${destinationTransport}://${destinationImage}`
                    console.log(`Synced with fallback ${sourceImage} to ${destinationImage}`)
                    dockerTags += destinationImage
                    dockerTags += '\n'
                } catch (fallbackError) {
                    console.error(`fallback exec error: ${fallbackError}`)
                }
            }
        }
    }
}
dockerTags = dockerTags.trim()
if (dockerTags) {
    const text = `\`\`\`\n${dockerTags}\n\`\`\``
    const readme = await fs.readFile('README.md', 'utf-8')
    const newReadme = readme.replace(/<!-- DOCKER_START -->([\s\S]*?)<!-- DOCKER_END -->/, `<!-- DOCKER_START -->\n${text}\n<!-- DOCKER_END -->`)
    await fs.writeFile('README.md', newReadme)
    console.log('更新 Docker Tags 成功')
}
