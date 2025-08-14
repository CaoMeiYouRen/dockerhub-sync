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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-6e689c4e0bb5535c77df8d286f3e4d68406f589e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2025-08-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:6e689c4e0bb5535c77df8d286f3e4d68406f589e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-08-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-b630afc51a3cd58495a04ec6dd484a7212041d88
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.33.0-rc1-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.33.0-rc1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.33.0-rc1-linux-amd64-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-jod
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:iron-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.23-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.23-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0rc1-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0rc1-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250808-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250808-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250808
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250808-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u462-b08-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u462-b08-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u462-b08-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u462-b08-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk-lts-and-current-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk-lts-and-current-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk-21-and-24-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk-21-and-24-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6.6-jdk8-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6.6-jdk8-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6.6-jdk8-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6.6-jdk8-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6.6-jdk17-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6.6-jdk17-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2.0-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0.3-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:6.0.26-rc0-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:6.0.26-rc0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:6.0-rc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.13-rc2-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.13-rc2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.43-debian
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.43-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-debian
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.8.2-php8.2-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.8.2-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.8-php8.2-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.8-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6-php8.2-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-bbf9e85
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-08-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-f94e655
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-08-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-a2cc01b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-eba9cc1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-08-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-eb5ff32
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-08-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-eb5ff32
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-08-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-44f88b7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-cd2732e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-08-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-cd2732e
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
