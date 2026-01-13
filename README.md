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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.546
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.546-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.546-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:iron-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:25.2.1-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:25.2-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:25-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:24.12.0-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a3-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a3-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.2-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.2-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26rc1-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26rc1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26-rc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.5-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.12-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:6.2.21-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:6.2.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:6.2-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:6.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:6-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.44-debian
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.44-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-debian
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-92a45b3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-01-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-d5757b8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-01-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-5543b55
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-0528044
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-01-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-d7b50af
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-1970e19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-4131c2e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-01-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-4131c2e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-01-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-a7558d5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-f62ae79
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-01-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-f62ae79
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-f6ad3c2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-01-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-295a6eb
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
