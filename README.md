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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-e1be61e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-12-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:1.14.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-12-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-9312d12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-12-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-10160c6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:0a307e83c6c3499ba11a31cb626dc838d196a68b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2024-12-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:1.23.16-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:1-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:1.23.16-debian
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:1-debian
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:debian
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:1.23.16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.491-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.491-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.491
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.491-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:alpine-sts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:sts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.25.1-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.25.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.25.1-linux-amd64-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.25.1-linux-arm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.25.1-linux-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.25.1-linux-arm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/one-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/one-api:v0.6.9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-bullseye-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-bookworm-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0a3-slim-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0a3-slim-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0a3-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0a3-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0a3-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0a3-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0a3-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0a3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24rc1-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24rc1-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24rc1-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24rc1-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u432-b06-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u432-b06-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:23.0.1_11-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:23.0.1_11-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:23-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:23-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:23-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk23-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.11.0-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.11.0-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.11.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.11-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.11-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-b8d1624
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2024-12-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-b8d1624
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2024-12-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-88f2b64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-88f2b64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-5621487
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-5621487
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
