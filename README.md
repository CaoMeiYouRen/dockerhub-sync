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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.578
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.578-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.578-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.21-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.21-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.21-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.16-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.21-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.21-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260809-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260809-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260809-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260809-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260809
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26.0.1_8-jdk-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-jre-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-jdk-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jre-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jdk-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21.0.11_10-jre-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-jre-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-jdk-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-graal-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-graal-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-graal-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0.40-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0.40
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-0b9411b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-08-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-b6083a7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-ba05e75
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-d7858f3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-667d129
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-08-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-d043230
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-08-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-f1d55f7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-08-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-f1d55f7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-08-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-a0ac527
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-08-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-a0ac527
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-08-18
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
