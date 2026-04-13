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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-release-5.1.4_v1.2.20-ls110
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.1.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:version-5.1.4-r3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.1.4-r3-ls450
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.1.4-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.1.4-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:v0.12.9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:v0.12.9-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:v0.12.9-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:v0.12.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.4-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.13-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260404-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260404
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.9-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.2_10-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.2_10-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk26-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-25-and-26-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-25-and-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.4.1-jdk26-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.4.1-jdk26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.4.1-jdk-lts-and-current-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.4.1-jdk-lts-and-current
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-55e5c62
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-04-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-3dc01ec
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-04-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-85032d3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-a3a0897
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-84b28c0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-04-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-f15d6a4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-0284fa3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-04-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-0284fa3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-04-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-d077c0c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-04-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-9e8ed06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:2026-04-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-ff6b156
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2026-04-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
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
