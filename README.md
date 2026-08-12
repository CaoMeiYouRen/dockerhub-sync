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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.2.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:version-5.2.3_v2.0.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.2.3_v2.0.14-ls471
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.2.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.2.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-version-5.2.3_v2.0.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.2.3_v2.0.14-ls471
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-version-5.2.3_v2.0.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.577
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.577-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.577-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk26-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk26-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:20260805
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:7.0.3-php8.2-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:7.0-php8.2-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:7-php8.2-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-be78f22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-08-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-be78f22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-08-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-a8ac921
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-08-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-a8ac921
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-08-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-1fff33a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-08-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-aeace10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-9160929
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-e240244
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-ed32431
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-08-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-0259805
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-09580c6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-9364f66
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-8fb91ec
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-08-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:sha-3039a80
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:2026-08-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:sha-8dd86e8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:sha-3710c38
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:sha-d52cb4e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:sha-61c0dd9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:sha-7e09888
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:sha-330ad69
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
