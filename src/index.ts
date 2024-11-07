#!/usr/bin/env zx
/* eslint-disable no-undef */
import 'zx/globals'
import Parser from 'rss-parser'
import fs from 'fs-extra'
import { to } from 'await-to-js'

const rssParser = new Parser()

// 格式 caomeiyouren/rss-impact-server
const sourceRepos = process.env.SOURCE_REPOS?.split('\n')?.filter(Boolean) || []

if (!sourceRepos?.length) {
    console.error('Error: SOURCE_REPOS environment variable is not set or is empty.')
    process.exit(1)
}

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

let dockerTags = ''

for (const sourceRepo of sourceRepos) {
    console.log(`Syncing ${sourceRepo} to multiple destinations`)
    const search = new URLSearchParams({
        filter_time: filterTime.toString(),
        limit: limit.toString(),
        filterout: '\\.sig|chromium-bundled|window|nano|github|develop|beta|alpha|test|nightly|rc|rc\\.|rc-|rc_',
    })
    const rssUrl = new URL(`https://rsshub.cmyr.dev/dockerhub/tag/${sourceRepo}?${search}`).toString()

    const [error, rssResp] = await to(rssParser.parseURL(rssUrl))
    if (error) { // 如果出现异常，跳过本次循环
        console.error(`error: ${error}`)
        continue
    }
    const tags = rssResp.items.map((item) => item.guid.split('@')[0])

    console.log(`The tag to be synchronized is ${tags.join(', ')}`)

    for (const tag of tags) {
        const [namespace, projectName, rawTag] = tag.split(/:|\//)
        const sourceImage = tag

        for (const { registry, username, password } of destinationCredentials) {
            const destinationImage = `${registry}/${projectName}:${rawTag}`
            try {
                console.log(`Start synchronizing ${sourceImage} to ${destinationImage}`)
                await $`skopeo copy --format ${syncFormat} --src-tls-verify=false --dest-tls-verify=false --dest-creds=${username}:${password} ${sourceTransport}://${sourceImage} ${destinationTransport}://${destinationImage}`
                console.log(`Synced ${sourceImage} to ${destinationImage}`)
                dockerTags += destinationImage
                dockerTags += '\n'
            } catch (error2) {
                console.error(`exec error: ${error2}`)
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
