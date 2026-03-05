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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.2.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:next
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.2.0-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:next-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.2.0-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:v0.11.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:v0.11.2-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:v0.11.2-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:1.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:1.14.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-1.14.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-bullseye-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-bookworm-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.20-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.20-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.20-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.20-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.20-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.20-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.9.1-php8.4-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.9.1-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.9-php8.4-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.9-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6-php8.4-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-ddc7ab2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-03-06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-4fb361c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-03-04
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:sha-cc6aa44
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:2026-03-05
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:sha-a422a9a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:sha-6f553f3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-aeacbe5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-03-06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-aeacbe5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-03-06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-96068ca
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-03-05
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-96068ca
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-03-05
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-61a598e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-03-04
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-b651564
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-4499d4f
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
