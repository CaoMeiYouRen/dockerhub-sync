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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.9.1-jdk27-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.9.1-jdk27-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.9.1-jdk25-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:2026-11-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3-node26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3.23-node26.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:2026-11-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3-node26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3.23-node26.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:2026-11-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3-node26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3.23-node26.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:2026-11-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3-node26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3.23-node26.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-4439248
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b40dacd
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-c877bf3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-66ad22a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-8019de7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-03d9d76
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-9c28862
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-4af82e9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-55935c8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-d1b080f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-9d712a9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-e77d5ad
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b3ae2ba
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-78df33d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-463fa52
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b649181
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-0a2a9c7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-8088388
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:1.1.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:platform-1.1.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:2026-11-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-3f98347
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-fac6627
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-eab4132
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:2026-11-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-659eca9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-c62ebe5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-36bd6c7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-5d4be34
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-8088388
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:1.1.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:platform-1.1.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:2026-11-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-3f98347
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-fac6627
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-eab4132
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:2026-11-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-659eca9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-c62ebe5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-36bd6c7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-5d4be34
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-8088388
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:platform-1.1.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-3f98347
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-fac6627
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-eab4132
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-659eca9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-c62ebe5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-36e7ad1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-efb84ab
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-751b787
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-5f28194
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:1.17.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-8de6f41
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-f0f13a3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-fab3ebe
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-11-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-ea62ed1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-a5a4c45
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-e4f3965
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-d34da63
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-c763699
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-cd5c2d3
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
