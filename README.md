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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.5.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:next
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.5.11-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:next-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.5.11-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:next-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.5.11-slim-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2-slim-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:next-slim-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.5.10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.5.10-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.5.10-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.5.10-slim-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:2.17.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:22.23.5-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:22.23.5-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:22.23-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:22.23-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:22-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:22-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:24.22.3-trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:24.22.3-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:24.22.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.18-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.16-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.16-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.16-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.18-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.18-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.2-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.10-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.10-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.10-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27.0.1.0-jre-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27.0.1.0-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27.0.1.0-jdk-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27.0.1.0-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27-jre-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27-jdk-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.5_8-jre-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.5_8-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.5_8-jre-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.5_8-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25.0.5_8-jdk-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jre-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jre-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:25-jdk-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.12-rc3-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.12-rc3-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.12-rc3-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.12-rc3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.4-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.8-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.8-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4.8-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4.8-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2.11-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2.11-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9.0.8-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9.0.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9.0-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9-resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9
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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0.48-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0.48
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3.1.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-38b230b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b71bde8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-49e7a07
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-65c5a40
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-92ad6d1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-6cab4f6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-47fc1fc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-2fce2ad
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-847829d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-06a2165
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-d9bdaa4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-3737c44
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-bb4be74
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-2b6ec0b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-0e86e91
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-e24d9c9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-7430abd
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-5c97609
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-178a536
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-f0e7791
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-848aefe
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-2ea2d5c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-37dd9aa
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-0eda6db
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-2dd0c02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-b34e4ce
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-685ab73
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-050b763
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:sha-9f80643
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:2026-11-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/vision-augment:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-bdbb998
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:2026-11-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-a4c0f39
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:sha-7297720
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:2026-11-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:sha-3d99ee0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:sha-b33814f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:2026-11-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:sha-0e2e956
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-6e6bb98
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2026-11-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:sha-996b1ed
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:2026-11-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:bun-sha-996b1ed
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:bun-2026-11-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:bun-sha-db56e75
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-602c0ee
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-11-12
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
