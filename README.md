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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-b5ba07a974a61f8759b3e110ac03e6e8cb82080a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2025-06-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:b5ba07a974a61f8759b3e110ac03e6e8cb82080a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-06-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-fe88e7a7db84cf9a70e189d487f1b39c9b3462df
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.504.3-lts-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.504.3-lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.504.3-lts-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.504.3-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.504.3-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.504.3-lts-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.504.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.27.8-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.27.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.27.8-linux-arm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.27.8-linux-ppc64le-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.27.8-linux-arm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.27.8-linux-ppc64le
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-jod
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bullseye-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bookworm-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250620-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250620-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250620-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250620-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250620-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u452-b09-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u452-b09-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24.0.1_9-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24.0.1_9-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk11-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk11-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6.5-jdk8-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6.5-jdk8-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6.5-jdk17-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6.5-jdk17-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6.5-jdk11-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6.5-jdk11-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6-jdk8-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6-jdk8-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-9df56d6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-06-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-9df56d6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-06-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-8f409c9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-06-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-8f409c9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-06-24
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
