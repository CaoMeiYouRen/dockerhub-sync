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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.20-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260613-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260613-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27rc1-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27rc1-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27rc1-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27rc1-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27rc1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u492-b09-jre-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u492-b09-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u492-b09-jdk-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u492-b09-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk26-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-graal-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-graal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-graal-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-1e77720
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:2026-06-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-ab05a52
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-1a09233
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-45f945d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-c9bacc3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-06-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-cbdef6b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-5fce6a8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-06-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-7734cd9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-aaf7514
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-c1e3390
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:1.18.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-5957748
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:2026-06-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-8df8692
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-06-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-62d53a2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-06-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-2b8a91a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-ead6948
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-ead6948
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-e66c4bb
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-b29491e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2026-06-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-9908111
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
