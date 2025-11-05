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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:base3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:base3-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:builder-go3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.535-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.535
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.535-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:2.13.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:2.13.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:iron-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:25.1.0-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:25.1-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:25-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:24.11.0-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a1-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15-rc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20251102-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20251102
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20251102-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.3-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-25-and-25-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-25-and-25-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4-rc1-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4-rc1-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4-rc1-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4-rc1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2.3-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.44-debian
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.44-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-debian
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-4a73dc0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-11-06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-1c88ecf
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-11-05
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-2917528
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-11-04
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-9d81819
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-11-05
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-9d81819
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-11-05
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-c5ea9f8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-c5ea9f8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-747b6c2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-11-04
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
