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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:base2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.2.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:version-5.2.4_v2.0.15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.2.4-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.2.4_v2.0.15-ls481
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-version-5.2.4_v1.2.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-5.2.4_v1.2.20-ls137
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.2.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.2.4-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.2.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.2.4-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-version-5.2.4_v2.0.15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-libtorrentv1-version-5.2.4_v1.2.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.2.4_v2.0.15-ls481
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-libtorrentv1-5.2.4_v1.2.20-ls137
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-version-5.2.4_v2.0.15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-libtorrentv1-version-5.2.4_v1.2.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26.0.2.1_1-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26.0.2.1_1-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.4.1_1-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.4.1_1-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21.0.12.1_1-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21.0.12.1_1-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17.0.20.1_1-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17.0.20.1_1-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8.1-jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8.1-jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8-jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8-jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9-jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9-jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.6-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.6-jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.6-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.6-jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.6-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.6-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.6-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9.0.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9.0-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.3.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.3-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.34
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0.45
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:2026-10-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3-node24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3.24-node24.18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:2026-10-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3-node24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3.24-node24.18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:2026-10-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3-node24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3.24-node24.18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:2026-10-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3-node24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3.24-node24.18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-1965095
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-10-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-5f8c460
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-d0cef4a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-2c36f5b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-10-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-8095bd4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-7e4a757
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:2026-10-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-3a1af5c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:2026-10-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-f07aa78
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:sha-19228b5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:2026-10-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:sha-2d7ea87
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:sha-c3d76aa
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-b3466dc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-10-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:sha-e605ba9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:2026-10-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:bun-sha-e605ba9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:bun-2026-10-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:sha-9fc88e6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:bun-sha-9fc88e6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:sha-37ddde3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:2026-10-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:bun-sha-37ddde3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:bun-2026-10-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-8782473
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2026-10-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:sha-ae4919d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:2026-10-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:sha-d4be00b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:2026-10-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:sha-377b575
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:2026-10-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:sha-70eab1a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-61ce58e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-10-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:sha-a62ab5a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:2026-10-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-c631b43
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-10-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-c631b43
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-10-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
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
