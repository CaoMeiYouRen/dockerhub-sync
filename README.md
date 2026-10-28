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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-krypton
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:26.12.1-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:26.12-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:26-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:24.22.1-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:24.22.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:24.22-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:24.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:24-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:22.23.4-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:22.23.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.16.0a1-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.16.0a1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.16-rc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.2-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.10-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.18-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.16-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.16
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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27.3-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27_35-jre-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27_35-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27_35-jdk-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27_35-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27-jre-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27-jdk-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26.0.2.1_1-jre-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26.0.2.1_1-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26.0.2.1_1-jdk-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26.0.2.1_1-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-jre-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-jdk-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.4-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.8-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4.8-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2.11-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.10.3-trixie
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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:7-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:7-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-a17b1a8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-10-29
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-9cf9ea4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-ea07afa
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-10-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-db2f97b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-409a1e3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-10-29
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-8b0d34b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-10-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-f47d5d1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-c3a88f9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-10-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-e56b501
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-10-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-dfd5e39
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-10-29
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-dfd5e39
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-10-29
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-6aac8d1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-10-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-6aac8d1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-10-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-4ef7401
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-4ef7401
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-d3e915b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-10-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:1.13.6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-b2d9172
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
