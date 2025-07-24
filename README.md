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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-91e4d8c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2025-07-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-7d53d6ab4d250328e6cba5e631a5cb542ea33648
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2025-07-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:7d53d6ab4d250328e6cba5e631a5cb542ea33648
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-07-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-f057e7626e212e22c833b3ee137a861e45abf2bb
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.516.1-lts-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.516.1-lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.516.1-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.516.1-lts-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.516.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.516.1-lts-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:alpine-sts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:sts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.32.0-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.32.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.32.0-linux-amd64-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.32.0-linux-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-jod
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:iron-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:iron-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.23-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.23-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.5-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.11-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250720-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250720-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250720
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25rc2-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0.3-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.5-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.12-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.43-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.43-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.43
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.1-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-77443c0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-26d2ad2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-6c71996
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-b8da132
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-07-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-b184870
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-cd5e1f7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-447dca2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-7fb5b5f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2025-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-16fa8cc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-07-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-16fa8cc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-07-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-569a656
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-07-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-569a656
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-07-23
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
