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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.21-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.21-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.21-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.14-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.14-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.14-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260920-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260920-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260920-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260920-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260920-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:11.0.32_9-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:11.0.32_9-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:11.0.32_9-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:11.0.32_9-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:11-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:11-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:11-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:11-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:11-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:11-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk26-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.7.1-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.7.1-jdk26-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.7.1-jdk25-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.7.1-jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.3-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.3-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.3-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.2-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3.1.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-4e402d9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-09-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-14d5fcf
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-e3fbfef
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-09-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-e3fbfef
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-09-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-2c4863b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-b8e1ef9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-09-22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-b8e1ef9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-1a73abc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-09-22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-765d260
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-b271672
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-19cf8f3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-09-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-99e0d75
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2026-09-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
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
