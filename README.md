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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.14-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.14-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.13-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.13-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260606-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260606-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260606-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26.4-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.11-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.4-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4.4-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-194ee46
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-06-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:1.20.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-aacf1bc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-ce02903
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-06-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-eb1a320
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-06-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-65895d7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-06-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-fa1c4a6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2026-06-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
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
