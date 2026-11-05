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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-1.24.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-1.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:1.24.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:1.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:22.23.4-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:22.23.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:22.23-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:22.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:22-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-lithium
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bookworm-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lithium-trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lithium-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.2-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.2-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.2-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.10-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.10-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.10-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.18-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.18-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.18-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261101-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261101-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261101-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27.3-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27.3-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27.3-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26.10-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26.10-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26.10-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17.0.21_9-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17.0.21_9-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u504-b01-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u504-b01-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27_35-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27_35-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.5_8-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.5_8-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8.2-jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8-jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9-jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.6-jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.6-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.4-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.8-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4.8-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2.11-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.10.3-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-1f77b78
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-aefcd59
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-3f84ee8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-05
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-865e897
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-64f2bf0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-05
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-2377952
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-9703ead
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-377da10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-04
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-f058193
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:sha-24c1e44
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:2026-11-04
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
