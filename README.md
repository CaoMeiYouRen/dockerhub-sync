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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2566b86617e659be35ced002a0a2c3b9d8b8285e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2025-09-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2566b86617e659be35ced002a0a2c3b9d8b8285e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-09-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-9f8e967c8a30d545a08127e01b264eb4cad41218
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:7974
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.528-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.528
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.528-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:stable
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:0.25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:0.25.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.23-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.11-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.13-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250912-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250912-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250912-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250912
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24.0.2_12-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24.0.2_12-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24.0.2_12-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24.0.2_12-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk24-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-21-and-24-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-21-and-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.0.0-jdk24-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.0.0-jdk24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.0.0-jdk-lts-and-current-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.0.0-jdk-lts-and-current
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.14-rc1-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.14-rc1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.13-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0-rc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-7fb2700
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-09-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-6b7ff7a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-09-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-70d5d0b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-09-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-70f8ce4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-09-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-70f8ce4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-09-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-a0961db
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-09-16
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
