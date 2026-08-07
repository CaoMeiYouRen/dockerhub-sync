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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:latest-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:v4.2.5-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:latest-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:v4.2.5-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:latest-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:v4.2.5-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:latest-lite-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:v4.2.5-lite-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:latest-lite-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:v4.2.5-lite-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-bookworm-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.15-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.15-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.20-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.20-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.14-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.14-slim
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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.6.1-jdk21-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.6.1-jdk17-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.6-jdk21-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:20260805
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.1-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.5-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-b47736e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-08-08
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-13f10e6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-48f9c7e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-db0089b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-08-07
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-5bf84cd
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-08-06
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
