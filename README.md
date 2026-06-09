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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.2.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:version-5.2.1_v2.0.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.2.1_v2.0.13-ls460
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.2.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.2.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-version-5.2.1_v2.0.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.2.1_v2.0.13-ls460
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:1.18.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:1.18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-1.18.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-1.18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260606-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260606-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260606-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260606-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260606
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.24.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-4ce1b23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-06-10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-4ce1b23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-06-10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-7cac4ee
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-7cac4ee
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-cbdb5b5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-520ca9f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-2621734
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-06-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-9fa2758
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-06-08
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b629bd3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-cff8546
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
