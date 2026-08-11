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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.2.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:version-5.2.3_v2.0.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.2.3_v2.0.14-ls471
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.2.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.2.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-version-5.2.3_v2.0.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.2.3_v2.0.14-ls471
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-version-5.2.3_v2.0.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.577
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.577-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.577-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.15-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.15-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.15-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.15-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260809-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260809-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260809-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260809-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u492-b09-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u492-b09-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u492-b09-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u492-b09-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk26-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk26-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-a8ac921
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-08-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-a8ac921
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-08-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-e746064
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-08-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-e746064
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-08-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-9364f66
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-08-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-8fb91ec
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-08-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:sha-3039a80
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:2026-08-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:sha-8dd86e8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:sha-3710c38
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:sha-d52cb4e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:sha-61c0dd9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:sha-7e09888
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:sha-330ad69
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-e240244
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-08-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-03ce096
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-08-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-fd81351
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-08-10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-37e8753
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-641645a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-e46f56e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:sha-fcd5aff
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:2026-08-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:1.7.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:sha-5de5f20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:1.6.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:sha-ba18a60
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:2026-08-10
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
