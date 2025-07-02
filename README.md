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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-f7fd8074f446490f479eb881552b2eb3f3229170
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2025-07-02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:f7fd8074f446490f479eb881552b2eb3f3229170
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-07-02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-6e202ac335b545abfb634d9e5af760a2e272af22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.517-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.517
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.517-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:2.12.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.27.9-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.27.9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.27.9-linux-ppc64le-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.27.9-linux-amd64-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.27.9-linux-arm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:iron-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:iron-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:iron
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:20.19.3-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:20.19.3-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:20.19.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:20.19-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:20.19-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:20.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:20-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.23-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.23-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0b3-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250629-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250629
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25rc1-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25rc1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25-rc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u452-b09-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u452-b09-jre-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u452-b09-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u452-b09-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u452-b09-jdk-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u452-b09-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6.5-jdk8-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6.5-jdk8-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6.5-jdk17-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6.5-jdk17-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6.5-jdk11-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6.5-jdk11-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6-jdk8-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6-jdk8-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6-jdk17-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6-jdk17-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2-m01-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2-m01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0.2-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.11-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0.21-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0.21
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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.1-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-8cfe205
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-07-02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-8cfe205
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-07-02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-b6d647e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-07-01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-b6d647e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-07-01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-d6368df
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2025-07-01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-3ea0dfa
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2025-07-01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-fb069b1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-3dee54c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-6a40f68
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
