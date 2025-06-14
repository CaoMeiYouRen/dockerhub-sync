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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-1f39a90
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2025-06-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:1.15.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-eb5f4ba
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-56fd5c400bb937195ed6b80ba7329324f877493f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2025-06-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:56fd5c400bb937195ed6b80ba7329324f877493f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-06-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2ac656351d9456bf8ecc763d02849c0e1ca770f2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3-slim-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:slim-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:slim-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25rc1-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25rc1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25-rc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25rc1-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25rc1-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25rc1-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25rc1-alpine
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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-d95d8a6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2025-06-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:1.2.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-461a2c5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-06-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-461a2c5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-06-13
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
