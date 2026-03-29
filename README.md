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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.1.4-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-version-release-5.1.4_v1.2.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-release-5.1.4_v1.2.20-ls108
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.1.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:version-5.1.4-r2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.1.4-r2-ls447
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.1.4-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.1.4-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/listmonk:v6.1.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/listmonk:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/listmonk:v6.1.0-armv7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/listmonk:latest-armv7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/listmonk:v6.1.0-armv6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/listmonk:latest-armv6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/listmonk:v6.1.0-arm64v8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/listmonk:latest-arm64v8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/listmonk:v6.1.0-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/listmonk:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:latest-dev
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-dev
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-dev
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-dev
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u482-b08-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u482-b08-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.2_10-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.2_10-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.4.1-jdk25-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.4.1-jdk25-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.2.7-rc0-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.2.7-rc0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-6679e91
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-03-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-a94d3fa
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-03-29
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-7c32b1d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-84bfb53
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:1.11.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-3ce5eb1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-c4c749f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-03-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-e5850bb
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-03-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-393bd34
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:2026-03-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:2026-03-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3-node24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3.23-node24.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:2026-03-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3-node24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3.23-node24.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:2026-03-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3-node24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3.23-node24.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:2026-03-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3-node24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3.23-node24.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:sha-7c11f08
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:2026-03-29
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:1.5.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-8d1eb5c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-03-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-8d1eb5c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-03-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-238bdff
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-238bdff
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
