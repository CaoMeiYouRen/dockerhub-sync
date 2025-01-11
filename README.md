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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-9289096
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2025-01-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:1.14.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2025-01-10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:5d8fd440a8fa0e9227ee89c5ec375a33ecfc700e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-01-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.16-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.16-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.16-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24rc1-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24rc1-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24rc1-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23.4-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21.0.5_11-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u432-b06-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u432-b06-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:23.0.1_11-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:23.0.1_11-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk23-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.7-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.7-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:6.2.17-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:6.2.17-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:6.2-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:6.2-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:6-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:6-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.1-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.11.0-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.11.0-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.11.0-php8.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-1db3474
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:2025-01-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:1.1.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-a413842
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-01-10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-a413842
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-01-10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-f0fe8f7
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
