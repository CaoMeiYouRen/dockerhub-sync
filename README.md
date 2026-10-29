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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.588
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.588-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.588-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.588-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.588-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.588-slim-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.588-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:alpine3.24-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:alpine-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.18-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.16-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.16-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.16-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.18-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.18-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.2-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.2-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.2-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261025-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261025-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261025-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261025-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261025-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261025
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27.3-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26.10-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26.10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u504-b01-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u504-b01-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8.2-jdk17-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8-jdk17-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9-jdk17-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.6-jdk17-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.6-jdk17-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.6-jdk11-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.6-jdk11-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk17-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk17-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk11-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk11-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk17-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk17-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk11-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk11-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.12-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.12-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.17-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.17-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.4-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.8-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.8-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9.0.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.4-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.4-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.4.13-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.4.13-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-b84a530
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2026-10-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-73a6952
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-10-29
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-0f76aaa
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:sha-58f7766
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:2026-10-29
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:sha-ea5e7f0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:sha-76f0b89
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-beb5f7a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-10-29
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-e56b501
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-10-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-70ac4c0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-10-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-70ac4c0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-10-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-83f7524
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-dfd5e39
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-10-29
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-dfd5e39
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-10-29
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-a17b1a8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-10-29
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-9cf9ea4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-409a1e3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-10-29
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-8b0d34b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-10-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-f47d5d1
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
