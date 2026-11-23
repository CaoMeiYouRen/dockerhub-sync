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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.3.0-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:version-5.3.0_v2.1.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-version-5.3.0_v1.2.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.3.0_v2.1.2-ls488
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-5.3.0_v1.2.20-ls144
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.3.0-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.3.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.3.0-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.3.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-libtorrentv1-version-5.3.0_v1.2.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-version-5.3.0_v2.1.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-libtorrentv1-5.3.0_v1.2.20-ls144
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.3.0_v2.1.2-ls488
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-libtorrentv1-version-5.3.0_v1.2.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-version-5.3.0_v2.1.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:1.31.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:1-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:1.31.0-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:stable
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:26.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:26.11.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.4.1-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.4.1-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.4.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.4-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.4-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-c1d7266
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:2026-11-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-1b02460
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-2ecc412
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:2026-11-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-fbedf1a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-3025809
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:2026-11-22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-388a95a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-02167df
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-5870042
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-c1d7266
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:2026-11-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-1b02460
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-2ecc412
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:2026-11-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-fbedf1a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-3025809
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:2026-11-22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-388a95a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-02167df
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-5870042
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-c1d7266
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-1b02460
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-2ecc412
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-fbedf1a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-59a0efc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-3025809
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-388a95a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-02167df
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-5870042
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-89d436f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-3520dcb
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-c7d72ab
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-2235c0b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-15330f2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-cfa05aa
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b6dcd83
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-2a38f96
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-5714aab
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-f686271
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:1.18.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-ecba69f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-8f25a85
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-97524f7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-e21d08f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-e171f71
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-caa330c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-c6c910c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-2cf1606
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-a8117e8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-857b677
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-02ca7dc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-11-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:1.19.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-6e6bb98
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2026-11-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:2026-11-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3-node26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3.23-node26.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3.23.8-node26.13.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:26.13.1-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:2026-11-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3-node26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3.23-node26.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3.23.8-node26.13.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:26.13.1-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:2026-11-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3-node26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3.23-node26.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3.23.8-node26.13.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:26.13.1-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:2026-11-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3-bun1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3.23-bun1.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3.23.8-bun1.4.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:1.4.5-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:sha-16224bb
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:2026-11-22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:sha-b50e235
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:1.9.0
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
