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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-ec54ea1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2025-08-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-8a6469cd78bdb007612f880827c987540b9f25e8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2025-08-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:8a6469cd78bdb007612f880827c987540b9f25e8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-08-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-60ba70d139128ad2c951211ddb1891eaac14d3c7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:1.27.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:1-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:1.27.0-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.7-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.7-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.7-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.7-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250808-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250808-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250808-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.0-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.1-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.8.2-php8.3-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.8.2-php8.1-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.8-php8.3-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.8-php8.1-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6-php8.3-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6-php8.1-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-b6fcb52
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-08-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-426df32
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-08-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-426df32
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-08-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-be62cce
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-08-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-be62cce
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-08-17
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
