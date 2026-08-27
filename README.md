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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:alpine-sts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:sts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.45.0-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.45.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.45.0-linux-arm64-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.45.0-linux-amd64-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.21-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.21-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.14-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.14-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.16-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.16-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u502-b07-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u502-b07-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26.0.2_10-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26.0.2_10-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk26-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk26-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.2-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.6-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4.6-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4.6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:7.1.0-php8.4-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:7.1.0-php8.4-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-ab66c9b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-08-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-ab66c9b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-08-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-7d6c65f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-08-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-5dd442c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-f016475
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-08-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-8c3ee84
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-cb962d4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:platform-0.2.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-08-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-065b5ec
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-3123aa8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-b7c9226
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
