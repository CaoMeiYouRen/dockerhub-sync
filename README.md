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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-trixie-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-bookworm-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.13-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.13-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.15-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.15-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.20-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.20-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26.4-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.11-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.11-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.1-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.1-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-d0940c0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-06-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-d0940c0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-06-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-4b7c582
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-06-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-a2b6f72
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-7fb3102
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-c3c7ec9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-06-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-a033bc6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2026-06-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:sha-96bb7b2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:2026-06-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:sha-96b5664
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:2026-06-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:sha-d72aa85
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:2026-06-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-62f7b01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-06-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
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
