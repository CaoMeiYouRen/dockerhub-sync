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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-fddcfec
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2025-05-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-43685a9c75b54fecc98ddada553a7453e9fc5445
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2025-05-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:43685a9c75b54fecc98ddada553a7453e9fc5445
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-05-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-fad0dfa7dc679a9dc2258b9878aa996eac5bec07
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.511-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.511-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.511
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:alpine-sts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:sts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.30.1-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.30.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.30.1-linux-arm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.30.1-linux-ppc64le-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.30.1-linux-arm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.30.1-linux-amd64-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250517-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250517-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250517-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250517-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250517-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk24-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk24-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-044c86b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-05-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-ea9d3de
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-05-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-ea9d3de
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-05-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-c71f8e7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-05-19
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
