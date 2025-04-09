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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-ec1977b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2025-04-08
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:8508789087d56576430614f6b81de91fdd1f59a7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-04-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.505-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.505
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.505-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.505-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.10-slim-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.10-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.10-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.10-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-slim-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250406-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250406
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24.2-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u442-b06-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u442-b06-jre-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u442-b06-jre-focal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u442-b06-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u442-b06-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u442-b06-jdk-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u442-b06-jdk-focal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u442-b06-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-focal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-rc1-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-rc1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.2-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.7-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.41-debian
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.41-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-debian
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-934431d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-04-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-934431d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-04-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-bdba92a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-bdba92a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-a094daa
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-04-08
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
