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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:2025-07-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3.22-node22.16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:2025-07-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3.22-node22.16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:2025-07-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3.22-node22.16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-ebe3dbf
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2025-07-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-b2e2c9e6a01520af14873ebd8ce2c73a5d54d840
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2025-07-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:b2e2c9e6a01520af14873ebd8ce2c73a5d54d840
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-07-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-73f33f9f3c0037fa2ca15bb755ec413668c4f504
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24.0.1_9-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24.0.1_9-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24.0.1_9-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24.0.1_9-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:24-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk24-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-21-and-24-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-21-and-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.3-jdk24-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.3-jdk24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.3-jdk-lts-and-current-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.3-jdk-lts-and-current
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-108e645
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-07-22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-45ed15d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-6f10997
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-07-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-1bfad8e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-07-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-0724c90
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-07-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-0724c90
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-07-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:2025-07-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3.22-node22.16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:latest
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
