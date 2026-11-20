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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:latest-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:v4.2.10-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:latest-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:v4.2.10-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:latest-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:v4.2.10-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:v4.2.10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:2.17.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:alpine-sts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:sts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.45.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.45.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.45.4-linux-ppc64le-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.45.4-linux-ppc64le
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.45.4-linux-amd64-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.45.4-linux-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.45.4-linux-arm64-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.45.4-linux-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261115-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261115-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261115-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261115-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261115
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.3.17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.3.17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.3-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.38-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.38
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-70d4341
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-4cf7d19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-7b38146
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-4e9cf19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-49f7f17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-9575b5b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-1fc5a2a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-2a6eee5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-e97918f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-1e11740
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-396ed65
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-5a6362e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-8b275dd
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-057bec6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-bc93c16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-16231e1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-ca00093
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:2026-11-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-05e5563
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-b7e47f6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-96b9172
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:2026-11-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-be055bf
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-080f642
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-ca00093
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:2026-11-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-05e5563
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-b7e47f6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-96b9172
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:2026-11-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-be055bf
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-080f642
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-ca00093
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-05e5563
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-b7e47f6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-96b9172
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-be055bf
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-080f642
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-1ffe198
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-11-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-1ffe198
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-11-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:sha-9c65b80
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:2026-11-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-4e189cc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-11-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
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
