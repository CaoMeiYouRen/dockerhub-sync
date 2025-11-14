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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:2.13.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:24.11.1-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:24.11.1-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:24.11-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:24.11-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:24-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:24-alpine
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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.3-jdk8-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.3-jdk8-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.3-jdk21-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.3-jdk21-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.3-jdk17-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.3-jdk17-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.2.2-rc0-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.2.2-rc0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.2.1-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.2.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.2-rc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.2-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:sha-fe897d9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:2025-11-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-d2c3699
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-11-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-d2c3699
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-11-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-84a146c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-11-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-84a146c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-11-13
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
