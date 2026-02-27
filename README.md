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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:alpine-sts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:sts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.39.0-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.39.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.39.0-linux-amd64-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:25.7.0-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:25.7.0-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:25.7.0-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:25.7-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a6-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a6-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.14-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.14-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260221-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4.2-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:sha-125c9f3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:2026-02-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:1.2.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:sha-2697e47
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:2026-02-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:1.2.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-71b47ca
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-02-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-71b47ca
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-02-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-4800af7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-02-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-4800af7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-02-26
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
