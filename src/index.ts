#!/usr/bin/env zx
/* eslint-disable no-undef */
import 'zx/globals'

// 格式 caomeiyouren/rss-impact-server
const sourceRepos = process.env.SOURCE_REPOS?.split('\n') || []

if (!sourceRepos?.length) {
    console.error('Error: SOURCE_REPOS environment variable is not set or is empty.')
    process.exit(1)
}
// 格式 docker://username:password@registry.example.com
const destinationCredentials = process.env.DESTINATION_CREDENTIALS?.split('\n').map((line) => {
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
const syncTags = 10
const syncFormat = 'v2s2'
const syncTimeframe = 48 * 60 * 60 // 48 hours in seconds

for (const sourceRepo of sourceRepos) {
    console.log(`Syncing ${sourceRepo} to multiple destinations`)

    // Get the list of tags and their creation timestamps
    const { stdout, stderr } = await $`skopeo list-tags --format '{{.Tag}} {{.Created}}' docker://${sourceRepo}`

    if (stderr) {
        console.error(`exec error: ${stderr}`)
        continue
    }

    // Parse the output and filter the latest 10 tags within the last 48 hours
    const tags = stdout.trim().split('\n')
        .map((line) => line.split(' '))
        .filter(([, created]) => Date.now() / 1000 - parseInt(created) <= syncTimeframe)
        .slice(0, syncTags)
        .map(([tag]) => tag)

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
