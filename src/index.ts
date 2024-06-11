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
// 格式 docker://username:password@registry.example.com
const destinationCredentials = process.env.DESTINATION_CREDENTIALS?.split('\n')?.filter(Boolean).map((line) => {
    const url = new URL(line)
    return {
        url: url.hostname,
        username: url.username,
        password: url.password,
    }
}) || []

if (!destinationCredentials?.length) {
    console.error('Error: DESTINATION_CREDENTIALS environment variable is not set or is empty.')
    process.exit(1)
}

const sourceTransport = 'docker'
const destinationTransport = 'docker'
const limit = 10
const syncFormat = 'v2s2'
const filterTime = 48 * 60 * 60 * 1000 // 48 hours in seconds 172800000

for (const sourceRepo of sourceRepos) {
    console.log(`Syncing ${sourceRepo} to multiple destinations`)

    const rssUrl = new URL(`https://rsshub.app/dockerhub/tag/${sourceRepo}?filter_time=${filterTime}&limit=${limit}`).toString()

    const rssResp = await rssParser.parseURL(rssUrl)

    const tags = rssResp.items.map((item) => item.guid.split('@')[0])

    console.log(`The tag to be synchronized is ${tags.join(', ')}`)

    for (const tag of tags) {
        const sourceImage = `${sourceRepo}:${tag}`

        for (const { url, username, password } of destinationCredentials) {
            const destinationImage = `${url}/${sourceRepo}:${tag}`

            try {
                await $`skopeo copy --format ${syncFormat} --src-tls-verify=false --dest-tls-verify=false --dest-creds=${username}:${password} ${sourceTransport}://${sourceImage} ${destinationTransport}://${destinationImage}`
                console.log(`Synced ${sourceImage} to ${destinationImage}`)
            } catch (error) {
                console.error(`exec error: ${error}`)
            }
        }
    }
}
