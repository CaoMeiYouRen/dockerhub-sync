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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:2026-02-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3-node24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3.23-node24.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:2026-02-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3-node24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3.23-node24.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:2026-02-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3-node24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3.23-node24.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-8c45b28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-02-08
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-053ff91
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-02-07
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.1.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:next
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.1.0-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:next-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.1.0-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:stable
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:0.26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:0.26.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.14-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.14-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.14-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.19-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.19-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.19-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.19-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260131-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260131
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24.13-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24.13-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.2_10-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.2_10-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.2_10-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.2_10-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jdk
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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.9.1-php8.3-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.9.1-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.9.1-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.9.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.9-php8.3-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.9-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-aeec526
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-02-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-f30bbaf
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-ddb55e8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-02-08
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-fd339d6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-eb3a598
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-63087b1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-30aaefc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:2026-02-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3-node24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3.23-node24.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-af29088
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-02-08
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:sha-4ef2569
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:2026-02-08
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:sha-0a533cf
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:2026-02-08
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:latest
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
