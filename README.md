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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:2025-07-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3.22-node22.16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:2025-07-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3.22-node22.16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:2025-07-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3.22-node22.16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-83b08fb27ab78132d10cb432554f6c9420fae376
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2025-07-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:83b08fb27ab78132d10cb432554f6c9420fae376
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-07-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-cfbadae460bdf5fd395a1a8f27cf64118a1c173c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.46.2-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.46.2-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.46.2-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.46.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-b49d01f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-07-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-c6435d1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-07-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-7755884
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-380427d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-07-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-38078fc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-c405095
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:2025-07-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3.22-node22.16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-f7afebf
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2025-07-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-e1746fb
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-9be7b4b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-7fb5b5f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2025-07-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:1.3.0
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
