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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-46b194d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-12-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:5cef7df512b7d2f953af19afae2febb42f375e9b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2024-12-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/one-api:v0.6.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/one-api:v0.6.6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/one-api:v0.6.7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/one-api:v0.6.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/one-api:v0.6.9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/one-api:latest
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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.11-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.11-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24rc1-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24rc1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24-rc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23.4-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-M02-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-M02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.1-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.6-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.40-debian
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.40-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-debian
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.7.1-php8.3-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.7.1-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.7-php8.3-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.7-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6-php8.3-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.7.1-php8.3-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-1165a60
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2024-12-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-1165a60
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2024-12-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-408792e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2024-12-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-408792e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2024-12-25
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
