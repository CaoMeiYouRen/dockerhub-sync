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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.14-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.14-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.19-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.19-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26rc1-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26rc1-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.5-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.5-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u472-b08-jre-alpine-3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u472-b08-jdk-alpine-3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-alpine-3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-alpine-3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-alpine-3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.1_8-jre-alpine-3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.1_8-jdk-alpine-3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jre-alpine-3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jdk-alpine-3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-alpine-3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.2.1-jdk25-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.2.1-jdk25-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.1-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.1-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.1-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12-php8.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2-php8.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.9.0-php8.1-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.9.0-php8.1-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-eedf9b0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2025-12-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-16090c7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-40fb52b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-6d73180
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-a991e82
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2025-12-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-a6d1bf5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-fe898e8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-41ae0c8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-12-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:1.12.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-036257d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-12-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-036257d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-12-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
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
