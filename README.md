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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:base2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:base2-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:iron-trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a5-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a5-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a5-slim-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a5-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a5-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a5-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a5-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260109-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260109-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260109-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260109-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260109-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u472-b08-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u472-b08-jre-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u472-b08-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u472-b08-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u472-b08-jdk-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u472-b08-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.2.3-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.2.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.2-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b01acb1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-01-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-a26a97d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-01-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-e5727b4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-cb34f6d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-7dfddda
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-01-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-7dfddda
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-01-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-fbadff4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-dde49c0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-01-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
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
