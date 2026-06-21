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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.2.2-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.2.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-version-5.2.2_v1.2.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:version-5.2.2_v2.0.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-5.2.2_v1.2.20-ls121
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.2.2_v2.0.13-ls463
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.2.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.2.2-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.20-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260613-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260613-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260613-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-8b65ba1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-06-22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-78ca8d7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-06-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-bc59301
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-06-22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-ebf857b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-06-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-e298dae
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-06-22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-b893dd5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-06-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-c9bacc3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-cbdef6b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-5fce6a8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-06-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-7734cd9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:2026-06-22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3-node24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3.24-node24.17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:2026-06-22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3-node24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3.24-node24.17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:2026-06-22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3-node24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3.24-node24.17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:2026-06-22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3-node24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3.24-node24.17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:sha-044e44b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:2026-06-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:1.4.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:sha-641a409
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-18c3894
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2026-06-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-ea09667
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:sha-5102bbd
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:2026-06-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:1.1.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:sha-9030b11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-dab9c6f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:2026-06-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:1.3.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-1e77720
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:2026-06-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-ab05a52
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-1a09233
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-45f945d
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
