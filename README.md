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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26.0.2.1_1-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26.0.2.1_1-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.4.1_1-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.4.1_1-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21.0.12.1_1-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21.0.12.1_1-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17.0.20.1_1-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17.0.20.1_1-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8.1-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8.1-jdk25-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8.1-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8-jdk25-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9-jdk25-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9.0.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9.0-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.3.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.3-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.34
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0.45
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-d0cef4a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-10-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-2c36f5b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-10-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-8095bd4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-26add8c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-10-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-09c3248
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-b884291
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:sha-377b575
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:2026-10-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:sha-70eab1a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-61ce58e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-10-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:sha-37ddde3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:2026-10-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:bun-sha-37ddde3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:bun-2026-10-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-3a1af5c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:2026-10-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-f07aa78
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:sha-d4be00b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:2026-10-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:sha-a62ab5a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:2026-10-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-a0f4638
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-10-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
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
