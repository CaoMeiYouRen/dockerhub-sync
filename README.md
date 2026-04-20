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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.1.4-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-version-release-5.1.4_v1.2.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-release-5.1.4_v1.2.20-ls111
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.1.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:version-5.1.4-r3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.1.4-r3-ls451
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.1.4-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.1.4-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.60.0-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.60.0-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.60.0-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.60.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:stable
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:0.27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:0.27.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.15-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.20-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.4-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.13-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260418-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260418-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260418-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260418-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260418-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4.2-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4.2-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2.5-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2.5-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0.6-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0.6-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-8921e65
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-04-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b67a2bb
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-04-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-2e582bb
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-14a102a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-04-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-14a102a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-04-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:2026-04-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3-node24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3.22-node24.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:2026-04-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3-node24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3.22-node24.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:2026-04-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3-node24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3.22-node24.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:2026-04-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3-node24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3.22-node24.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:latest
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
