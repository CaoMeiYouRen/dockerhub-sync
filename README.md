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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-d15ad9a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2025-01-06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:acca6842a9f099819e5da70c02e80cf15d15d27a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-01-07
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.492-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.492-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.492
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.492-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:hydrogen-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:hydrogen-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:hydrogen-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:18.20.5-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:18.20.5-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:18.20.5-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:18.20-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:18.20-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:18.20-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:18-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0a3-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24rc1-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23.4-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24rc1-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24rc1-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:23.0.1_11-jre-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:23.0.1_11-jdk-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:23-jre-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:23-jdk-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:23-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21.0.5_11-jre-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21.0.5_11-jdk-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-jre-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-jdk-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk23-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-21-and-23-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.12.0-jdk23-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.12.0-jdk21-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.12.0-jdk-lts-and-current-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.12.0-jdk-21-and-23-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.21.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.20.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.19.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.18.10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-M02-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-M02-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.2-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.2-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.7-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.7-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:2.8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:2.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.1-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.11.0-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.11.0-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.11.0-php8.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-d9061ca
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2025-01-06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-2f292a6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-01-06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-2f292a6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-01-06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
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
