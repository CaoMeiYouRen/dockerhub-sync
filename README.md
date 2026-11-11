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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.590
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.590-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.590-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.590-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.590-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.590-slim-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.590-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:alpine3.24-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:alpine-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-lithium
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bookworm-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lithium-trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lithium-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lithium-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lithium-bookworm-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lithium-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lithium-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lithium-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261108-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u512-b09-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u512-b09-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u512-b09-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u512-b09-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27.0.1.0-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27.0.1.0-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.5_8-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.5_8-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8.2-jdk27-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8.2-jdk27-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8.2-jdk25-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.12-rc2-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.12-rc2-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.12-rc2-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.12-rc2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.12-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.12-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.17-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.17-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:6.2.24-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:6.2.24-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:6.2-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:6.2-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:6-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:6-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-35dfb70
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-47f3ec4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-ea69357
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-2283537
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b5e67b8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-200085c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-7890772
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-8e354fa
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-2f3592a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-2bffa33
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-67e724c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-a6873b3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-331f9fa
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-2754474
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-cc3eb74
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-413fc02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-5114a3c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-d56ad5c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-924c8f0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-fe7de64
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
