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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-418c3ec
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2025-01-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-724e7f0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2025-01-22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-127fe70
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-54f76ea
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:f70afef3db494c1646e16fb6c6b577c9e2e104be
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-01-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:23.6.1-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:23.6-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:23-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:iron-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:iron-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:hydrogen-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:hydrogen-bullseye-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0a4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14-rc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24rc2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17.0.13_11-jre-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:17-jre-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u432-b06-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u432-b06-jre-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u432-b06-jre-focal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u432-b06-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u432-b06-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u432-b06-jdk-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u432-b06-jdk-focal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u432-b06-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6.4-jdk11-focal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7.6-jdk11-focal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:7-jdk11-focal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-focal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk23-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-M03-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-M03-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-M03-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-M03
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.2.0-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.2.0-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.2.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.2-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-c1911bf
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-01-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-c1911bf
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-01-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-64a5e7b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-01-22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-64a5e7b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-01-22
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
