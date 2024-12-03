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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-a71a854
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-12-02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-675a5c9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2ee154c2d8c7b431834873db0e768b1091cff70c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2024-12-03
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.488-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.488-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.488
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.488-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:v3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:alpine-sts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:sts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.24.1-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.24.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.24.1-linux-ppc64le-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.24.1-linux-amd64-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.24.1-linux-ppc64le
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.24.1-linux-amd64
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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.20-slim-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.20-slim-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.20-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.20-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-slim-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-slim-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23.3-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23.3-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.22.9-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u432-b06-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u432-b06-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u432-b06-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u432-b06-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk23-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-21-and-23-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-21-and-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.11.1-jdk23-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.11.1-jdk23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.11.1-jdk-lts-and-current-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.11.1-jdk-lts-and-current
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-M02-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-M02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.1-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.6-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.4-rc0-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.4-rc0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.3-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0-rc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.40-debian
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.40-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-debian
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.1-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.1-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:sha-d9cf9de
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:2024-12-03
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:sha-07143f4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:sha-600cccd
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:sha-a0120aa
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-7c9b091
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2024-12-03
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-9bf0052
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2024-12-03
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-e7d86a5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2024-12-02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:sha-8c67fb6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:2024-12-02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/download-start-dash:sha-fccaa83
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/download-start-dash:2024-12-02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/download-start-dash:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/download-start-dash:sha-66ff58b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/download-start-dash:2024-12-01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/download-start-dash:sha-fc2f321
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/download-start-dash:sha-bc9eecd
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/download-start-dash:sha-d3392b3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/download-start-dash:sha-e2f312c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/download-start-dash:sha-82acafc
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
