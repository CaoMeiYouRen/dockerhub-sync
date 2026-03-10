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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.2.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:next
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.2.1-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:next-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.2.1-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.554
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.554-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.554-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.554-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:latest-dev
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-dev
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-dev
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-dev
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a7-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a7-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a7-slim-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a7-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a7-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a7-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a7-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260308-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260308-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260308
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260308-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-8dbd625
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-03-10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-9556a7a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-0a45d3f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-18863e3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-03-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-c281d24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-7ceffec
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:sha-2a70d18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:2026-03-10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-629291b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-03-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-629291b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-03-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-1a0ce42
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-03-10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-8c90f60
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-03-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
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
