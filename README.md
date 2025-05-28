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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-6f71718
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2025-05-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:5cf663659a97be5fa6d64bd97d11b148dca7edb9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-05-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-cf8e3bdf451a78782e5e4f002bc4187e98bfb86d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2025-05-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:cf8e3bdf451a78782e5e4f002bc4187e98bfb86d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.504.2-lts-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.504.2-lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.504.2-lts-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.504.2-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.504.2-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.504.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.504.2-lts-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0b2-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0b2-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0b2-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250524-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250524-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250524-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250524-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250524-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-focal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-focal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-focal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current-graal-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current-graal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-focal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-21-and-24-graal-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-21-and-24-graal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:focal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.1-jdk8-focal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-26cdda3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-05-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-26cdda3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-05-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-f2676ae
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-05-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-f2676ae
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-05-27
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
