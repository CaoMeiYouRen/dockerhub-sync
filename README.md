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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-31f8ece
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-09-08
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-31feb1c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-09-07
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:1.5.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.19-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.19-alpine3.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.19-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-alpine3.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.8.19-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.8.19-alpine3.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.8.19-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23.1-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23.1-alpine3.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23.1-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23-alpine3.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.22.7-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:22.0.2_9-jre-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:22.0.2_9-jdk-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:22-jre-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:22-jdk-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:22-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21.0.4_7-jre-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21.0.4_7-jdk-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-jre-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-jdk-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk22-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-21-and-22-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.10.0-jdk22-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.10.0-jdk21-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.10.0-jdk-lts-and-current-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.10.0-jdk-21-and-22-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.20.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.19.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.18.9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.17.10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.0-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.0-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.5-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.5-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.0-rc20-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:2.8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:2.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.1-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.1-fpm
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
