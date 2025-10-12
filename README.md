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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:2025-10-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3.22-node22.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:2025-10-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3.22-node22.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:2025-10-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3.22-node22.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-52f802320ddbfd28943391f11fbb8cdb3b245410
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2025-10-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:52f802320ddbfd28943391f11fbb8cdb3b245410
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-10-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-16f50c8e30374a0384424356f11bdbb9d9fcc713
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.8-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.8-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.8-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.2-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.2-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.2-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24.8-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2.2-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2.2-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0.4-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3.0.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:2025-10-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3.22-node22.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-fb8bebc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-10-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-2a60bf8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-1b6e412
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-10-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:1.10.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-40abe7f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-10-13
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
