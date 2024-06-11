#!/usr/bin/env zx
/* eslint-disable no-undef */
import 'zx/globals'
import Parser from 'rss-parser'

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
const limit = 10
const syncFormat = 'v2s2'
const filterTime = 48 * 60 * 60 // 48 hours in seconds 172800

for (const sourceRepo of sourceRepos) {
    console.log(`Syncing ${sourceRepo} to multiple destinations`)

    const rssUrl = new URL(`https://rsshub.app/dockerhub/tag/${sourceRepo}?filter_time=${filterTime}&limit=${limit}&filterout=.sig|chromium-bundled`).toString()

    const rssResp = await rssParser.parseURL(rssUrl)

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
            } catch (error) {
                console.error(`exec error: ${error}`)
            }
        }
    }
}
