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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.555.1-lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.555.1-lts-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.555.1-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.555.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.555.1-lts-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.555.1-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.555.1-lts-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:v0.12.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:v0.12.11-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:v0.12.11-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:v0.12.10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:24.15.0-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:24.15.0-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:24.15.0-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:24.15-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a8-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a8-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.4-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26.2-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26.2-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.9-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.9-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26_35-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26_35-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26_35-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26_35-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:6-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:6-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk26-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.23.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.2-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.2-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.3.0-rc5-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.3.0-rc5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.3-rc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.2.7-rc0-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.2.7-rc0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.2.6-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.2.6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.45-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.45-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.45
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3.1.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-bd6d525
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-04-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-bd6d525
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-04-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-203345b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-2660db7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-04-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-2660db7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:sha-1f0b122
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:2026-04-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:sha-adbb635
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:2026-04-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-872fba3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2026-04-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-2ce343b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2026-04-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-c56ee8b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-04-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b83ba2f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b8cbf07
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-04-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b12db71
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:sha-2f5c5a8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:2026-04-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:sha-fa32584
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:2026-04-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-305ca00
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2026-04-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:sha-1ef8436
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:2026-04-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:sha-549908d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:2026-04-15
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
