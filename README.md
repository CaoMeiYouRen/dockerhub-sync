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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.589
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.589-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.589-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.589-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.589-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.589-slim-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.589-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:alpine3.24-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:alpine-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.18-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.18-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.18-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.18-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.16-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.16-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.10-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.10-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261101-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261101-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261101-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261101-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261101-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261101
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u504-b01-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u504-b01-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21.0.13_9-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21.0.13_9-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17.0.20.1_1-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17.0.20.1_1-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:11.0.32.1_1-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:11.0.32.1_1-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:11-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:11-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:11-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8.2-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8.2-jdk25-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8.2-jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8.2-jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8.2-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8-jdk25-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8-jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8-jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.8-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9-jdk25-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9-jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9-jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.4-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.4-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.4.13-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.4.13-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-f1b7166
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-04
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-a049a56
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:platform-0.5.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-26674f3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-62393e6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-04
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-7870466
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-03
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-0926a3a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-49a6507
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-1f208cc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-c62d568
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-1ae317f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2026-11-03
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-f5dcbe3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-03
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-636572e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-8173033
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-11-04
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-507b860
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-378f51a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-11-03
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-378f51a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-11-03
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-a9bd87d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-11-02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-567cfc0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:sha-4ad2f07
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:2026-11-02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-7bf2b99
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2026-11-02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
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
