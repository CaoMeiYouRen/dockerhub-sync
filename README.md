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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-2b667ae
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2025-04-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:03969f386786d5e43178be56743a7ce16d1ce75f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-04-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.508-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.508-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.508
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.508-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-jod
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:iron-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:iron
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:hydrogen-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:hydrogen
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.22-slim-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.22-slim-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.22-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-slim-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-slim-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.12-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24.2-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24.2-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23.8-bullseye
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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk21-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk21-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk17-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk17-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk11-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk11-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk8-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk8-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk24-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk24-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-rc1-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-rc1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.3-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.8-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.42-debian
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.42-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-debian
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.1-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.1-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-a09e20a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2025-04-29
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-de5fb73
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-04-29
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-de5fb73
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-04-29
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-8c2cbe1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-8c2cbe1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-fe7e850
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-fe7e850
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
