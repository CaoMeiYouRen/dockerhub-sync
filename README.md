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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.5.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:next
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.5.8-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:next-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.5.8-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:next-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.5.8-slim-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2-slim-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:next-slim-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.16.0a1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.16-rc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261025-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261025-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261025-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261025-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261025-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261025
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17.0.20.1_1-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17.0.20.1_1-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17.0.20.1_1-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8.2-jdk21-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8.2-jdk17-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8-jdk21-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8-jdk17-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9-jdk21-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9-jdk17-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.6-jdk8-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.6-jdk8-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.6-jdk8-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.6-jdk8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.6-jdk21-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.4-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.4-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.8-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.8-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.8-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9.0.4-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9.0.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9.0-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.3.13-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.3.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.3-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.34-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.34
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0.45-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0.45
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3.1.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-c3a88f9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-10-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-2cc173f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-10-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-d3e915b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-10-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:1.13.6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-b2d9172
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-ea07afa
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-10-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-db2f97b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-84615ce
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-db0c6f0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-10-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-108e38f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-7701cc1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-6aac8d1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-10-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-6aac8d1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-10-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-4ef7401
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-4ef7401
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-0d46d9f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-10-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-0d46d9f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-10-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-a26e32f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2026-10-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
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
