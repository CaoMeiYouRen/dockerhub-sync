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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.3.0-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-version-5.3.0_v1.2.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-5.3.0_v1.2.20-ls138
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.3.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:version-5.3.0_v2.0.15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.3.0_v2.0.15-ls482
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.3.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.3.0-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.3.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.3.0-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-version-5.3.0_v2.0.15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-libtorrentv1-version-5.3.0_v1.2.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.3.0_v2.0.15-ls482
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-libtorrentv1-5.3.0_v1.2.20-ls138
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-version-5.3.0_v2.0.15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-libtorrentv1-version-5.3.0_v1.2.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:1.30.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:1-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:1.30.2-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.587
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.587-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.587-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.587-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.587-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.587-slim-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:rhel-ubi9-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.587-rhel-ubi9-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261017-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261017-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261017-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261017-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261017-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261017
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-graal-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-graal-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-graal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.2-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.2-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.4.11-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.4.11-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-fd09803
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-10-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:sha-330cfd2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:2026-10-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-f29bda3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-10-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-9703c01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-89fdb6c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-a9781be
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2026-10-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-8acf859
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-10-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-f54ce91
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
