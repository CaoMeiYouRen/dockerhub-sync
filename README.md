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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:push
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-bullseye-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-bookworm-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.14-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.13-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.15-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.20-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0b2-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27rc1-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26.4-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.11-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u492-b09-jre-alpine-3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u492-b09-jre-alpine-3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u492-b09-jre-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u492-b09-jdk-alpine-3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u492-b09-jdk-alpine-3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u492-b09-jdk-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-alpine-3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-alpine-3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-alpine-3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk26-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-25-and-26-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.6.0-jdk26-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.23.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.22.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.0-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.0-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.4-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3.1.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-2884d62
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-06-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-07bc0ab
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-06-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-3581031
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2026-06-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-399fbc1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-ff7ac49
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:2026-06-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-890c1b5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:sha-a3b69ef
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:2026-06-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:sha-f7a01d1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:sha-b858ece
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:2026-06-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:sha-ab8821c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:sha-0078f0d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:2026-06-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:sha-3de4441
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:sha-71c4baf
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:2026-06-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:latest
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
