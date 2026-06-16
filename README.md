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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.2.2-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-version-5.2.2_v1.2.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-5.2.2_v1.2.20-ls120
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.2.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:version-5.2.2_v2.0.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.2.2_v2.0.13-ls462
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.2.2-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.2.2-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.547-slim-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.547-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.547-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0b2-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0b2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.15-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.15-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0b2-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260613-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260613
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260613-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260613-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u492-b09-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u492-b09-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26.0.1_8-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26.0.1_8-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9-jdk-lts-and-current-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9-jdk-lts-and-current-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9-jdk-25-and-26-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.5-jdk17-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.5-jdk17-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.5-jdk11-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk8-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk8-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk17-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk17-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.24.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:7.0.0-php8.5-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:7.0-php8.5-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:7-php8.5-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-8f0eed2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2026-06-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-a11726c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-f00994d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-dba5b43
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-22a058c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-9647eef
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:sha-08a28af
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:2026-06-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:sha-1158961
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:sha-cefced9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:sha-6f8fc8f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-8055b2a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-06-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-68b105c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-06-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-378405e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:2026-06-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-561d06e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-0915e71
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-e6c5aec
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-0229740
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-60aeb8f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-06-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
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
