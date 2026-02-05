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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.57.0-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.57.0-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.57.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.57.0-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.495-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.495-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.495
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.495-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.495-rhel-ubi9-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.495-rhel-ubi9-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.495-alpine-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-bookworm-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.14-slim-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.14-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.14-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.14-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.14-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-slim-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260131-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u472-b08-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u472-b08-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u472-b08-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u472-b08-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6-rc1-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6-rc1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.9.1-php8.5-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.9.1-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.9-php8.5-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.9-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6-php8.5-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-ba762fd
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-02-05
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b967a68
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-29661c3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-0e44698
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-02-04
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-6ec88c6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-ecab833
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-442f456
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-02-06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-442f456
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-02-06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-4c18780
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-02-05
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-4c18780
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-02-05
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
