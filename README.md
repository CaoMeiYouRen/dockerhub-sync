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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.58.0-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.58.0-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.58.0-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.58.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:v0.11.6-patch.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:v0.11.6-patch.1-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:1.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:1.14.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-1.14.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-krypton
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.13-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.15-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.15-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.20-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.20-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260314-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26.1-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.8-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260314-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u482-b08-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u482-b08-jre-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u482-b08-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u482-b08-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u482-b08-jdk-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u482-b08-jdk
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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2.5-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0.6-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0.6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.8-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.45-debian
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.45-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-debian
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.9-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.9-php8.2-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.9-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.9-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.9-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6-php8.5-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6-php8.4-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6-php8.4-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-04a2910
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-03-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-76c6d07
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-cfb3c6d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-03-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-cfb3c6d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-03-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-0244ad5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-03-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-69b2b9b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-54a40d7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-03-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-7a5b5c1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-03-16
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
