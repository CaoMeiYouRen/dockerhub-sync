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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-eccda3a5d33e884d5003a17a89bdd3be8eba8c14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2025-07-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:eccda3a5d33e884d5003a17a89bdd3be8eba8c14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-07-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-35caf4da42d1a2824a64a6d56c86ba87c8dc94fe
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.519-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.519-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.519
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:stable
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:0.25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:0.25.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-jod
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bullseye-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bookworm-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.23-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.23-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.23-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0b4-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250711-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250711-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250711-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25rc2-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk8-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk8-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk24-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk24-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk21-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk21-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk17-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk17-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk11-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk11-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.22.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.21.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.20.7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.19.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2-rc1-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2-rc1-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0.3-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0.3-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.12-rc0-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.12-rc0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.11-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0-rc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3.0.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.8-php8.4-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.8-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.8-php8.3-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6-php8.4-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6-php8.4-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6-php8.4-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6-php8.3-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-2147bf0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-07-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-e15a9c2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-07-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-bb5af4d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-6f5b8c3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-c777815
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-484b508
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-b54520d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-48dcfbe
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-07-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-48dcfbe
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-07-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-5d1e28b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-56a7543
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-07-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-56a7543
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-9181ed0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:2025-07-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:1.1.3
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
