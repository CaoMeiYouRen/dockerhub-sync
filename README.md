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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:927513d6bec333b4fa2df3eb806caf1a962ff701
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-05-01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.504.1-lts-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.504.1-lts-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.504.1-lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.504.1-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.504.1-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-jod
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:iron-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:iron-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.22-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.22-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.3-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250426-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250426-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250426
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24.2-bullseye
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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk24-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk24-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0.20-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.3.0-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-b2658c6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2025-05-01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-a869803
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2025-05-01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-f22cee3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-05-01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-f22cee3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-05-01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-701d52c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-04-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-701d52c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-04-30
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
