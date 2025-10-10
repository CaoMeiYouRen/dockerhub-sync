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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-4549131d5531f27a8fce3d0c83e6c7111c956265
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2025-10-10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:4549131d5531f27a8fce3d0c83e6c7111c956265
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-10-10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-04a17c0b05d9d95afc38ef1872fe59176996aac8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-bookworm-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.24-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.24-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.24-slim-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.24-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.24-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.24-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.24-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.24-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20251003-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20251003-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20251003-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.2-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24.8-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u462-b08-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u462-b08-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u462-b08-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u462-b08-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.22.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.21.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.20.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.19.9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0.4-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.6-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.6-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.11-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.11-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.15-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3.0.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.1-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12-php8.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2-php8.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.8.3-php8.1-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-8db79a0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-10-10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-8db79a0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-10-10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-12b7554
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-10-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-12b7554
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-10-09
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
