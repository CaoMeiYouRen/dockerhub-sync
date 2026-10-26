<h1 align="center">dockerhub-sync </h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D16-blue.svg" />
  <a href="https://github.com/CaoMeiYouRen/dockerhub-sync#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/CaoMeiYouRen/dockerhub-sync/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/CaoMeiYouRen/dockerhub-sync/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/CaoMeiYouRen/dockerhub-sync?color=yellow" />
  </a>
</p>


> 同步 dockerhub 的镜像到其他镜像源

## 当前同步版本

<!-- DOCKER_START -->
```
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.5.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:next
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.5.8-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:next-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.5.8-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:next-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.5.8-slim-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2-slim-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:next-slim-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:base3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:base3-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.3.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:version-5.3.0_v2.1.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.3.0_v2.1.2-ls485
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.3.0-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-version-5.3.0_v1.2.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-5.3.0_v1.2.20-ls141
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.3.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.3.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-version-5.3.0_v2.1.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.3.0_v2.1.2-ls485
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-version-5.3.0_v2.1.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.3.0_v2.1.2-ls485
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.3.0-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.3.0-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-libtorrentv1-version-5.3.0_v1.2.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:latest-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:v4.2.9-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:latest-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:v4.2.9-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:latest-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:v4.2.9-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:v4.2.9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:latest-lite-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:v4.2.9-lite-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:latest-lite
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:v4.2.9-lite
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:latest-lite-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:v4.2.9-lite-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:latest-lite-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:v4.2.9-lite-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.4-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.4-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.8-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.8-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.8-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3.1.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:7.1.3-php8.5-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:7.1.3-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:7.1.3-php8.4-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:7.1.3-php8.4-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:7.1.3-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:7.1.3-php8.3-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:7.1.3-php8.3-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:7.1.3-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:7.1.3-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-84615ce
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-10-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-db0c6f0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-10-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-108e38f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-7701cc1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-7b58c81
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-10-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-882bdfa
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-2cc173f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-10-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-0d46d9f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-10-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-0d46d9f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-10-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-8d1a972
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-10-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-8d1a972
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-10-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-ef2fc7a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:2026-10-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3-node24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3.23-node24.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:2026-10-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3-node24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3.23-node24.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-ceb843a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-10-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
```
<!-- DOCKER_END -->

## 🏠 主页

[https://github.com/CaoMeiYouRen/dockerhub-sync#readme](https://github.com/CaoMeiYouRen/dockerhub-sync#readme)


## 📦 依赖要求


- node >=16

## 🚀 安装

```sh
npm install
```

## 👨‍💻 使用

```sh
npm run start
```

## 🛠️ 开发

```sh
npm run dev
```

## 🔧 编译

```sh
npm run build
```

## 🔍 Lint

```sh
npm run lint
```

## 💾 Commit

```sh
npm run commit
```


## 👤 作者


**CaoMeiYouRen**

* Website: [https://blog.cmyr.ltd/](https://blog.cmyr.ltd/)

* GitHub: [@CaoMeiYouRen](https://github.com/CaoMeiYouRen)


## 🤝 贡献

欢迎 贡献、提问或提出新功能！<br />如有问题请查看 [issues page](https://github.com/CaoMeiYouRen/dockerhub-sync/issues). <br/>贡献或提出新功能可以查看[contributing guide](https://github.com/CaoMeiYouRen/dockerhub-sync/blob/master/CONTRIBUTING.md).

## 💰 支持

如果觉得这个项目有用的话请给一颗⭐️，非常感谢

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=CaoMeiYouRen/dockerhub-sync&type=Date)](https://star-history.com/#CaoMeiYouRen/dockerhub-sync&Date)

## 📝 License

Copyright © 2024 [CaoMeiYouRen](https://github.com/CaoMeiYouRen).<br />
This project is [MIT](https://github.com/CaoMeiYouRen/dockerhub-sync/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [cmyr-template-cli](https://github.com/CaoMeiYouRen/cmyr-template-cli)_
