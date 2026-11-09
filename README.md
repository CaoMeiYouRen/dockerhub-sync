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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.3.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:version-5.3.0_v2.1.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.3.0_v2.1.2-ls487
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.3.0-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-version-5.3.0_v1.2.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-5.3.0_v1.2.20-ls143
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.3.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.3.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-version-5.3.0_v2.1.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.3.0_v2.1.2-ls487
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-version-5.3.0_v2.1.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.3.0_v2.1.2-ls487
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.3.0-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.3.0-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-libtorrentv1-version-5.3.0_v1.2.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.18-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.18-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.16-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.16-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.10-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.10-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.18-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.18-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.2-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.2-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.24.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.23.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.22.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.21.10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-417510f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-ba07d26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-ca6661d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-e4428b9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-3f8fdc3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-bfb5ce3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-248a1a1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-08
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-c27806a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-07
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:1.16.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-491debf
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-9dcc496
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-38c35ad
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-aff6ad2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-f71e8d4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-125c7a3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-c7de1bc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-e929c95
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-08
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-ded9fcf
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-b839493
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-af09a4f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-8e8d68f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-db5b887
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-a753e2f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-c296345
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b4c1adc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-e788cf8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-08
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-2c95419
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-a300132
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:1.30.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-6b2e203
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-7bf2b99
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2026-11-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:2026-11-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3-node26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3.23-node26.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:2026-11-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3-node26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3.23-node26.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:2026-11-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3-node26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3.23-node26.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:2026-11-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3-node26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3.23-node26.13
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
