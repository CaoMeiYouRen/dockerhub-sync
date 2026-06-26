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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:pr-test2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.39.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.39.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.39.4-linux-ppc64le-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.39.4-linux-ppc64le
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/listmonk:v6.2.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/listmonk:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/listmonk:v6.2.0-armv7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/listmonk:latest-armv7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/listmonk:v6.2.0-armv6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/listmonk:latest-armv6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/listmonk:v6.2.0-arm64v8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/listmonk:latest-arm64v8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/listmonk:v6.2.0-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/listmonk:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-bullseye-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-bookworm-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0b3-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0b3-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0b3-slim-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0b3-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0b3-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0b3-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0b3-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260619-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27rc1-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26.4-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.11-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u492-b09-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u492-b09-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21.0.11_10-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21.0.11_10-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.6.0-jdk21-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.6.0-jdk17-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.6-jdk21-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-0d4082b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-06-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-0d4082b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-06-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-82cb131
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:2026-06-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-6b96a75
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-ab17ffb
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:1.4.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-7925d61
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
