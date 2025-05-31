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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2d7aeebbb59f1e06e3f0c51513c0bb904f82ea9f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2025-05-31
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2d7aeebbb59f1e06e3f0c51513c0bb904f82ea9f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-05-31
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2dce2e32dd5f4dade2fc915ac8384c953e11cc83
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:iron-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:iron-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:22.16.0-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:22.16.0-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:22.16-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:22.16-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.22-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.22-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.17-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.17-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250524-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250524-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24.3-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24.3-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.22.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.4-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.9-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.9-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.10-rc0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.3.0-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-b0da01e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2025-05-31
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:1.2.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-2ebdc02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-05-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-2ebdc02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-05-30
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
