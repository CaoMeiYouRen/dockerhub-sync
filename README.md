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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-ec1977b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2025-04-08
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-b34bc04
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2025-04-07
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:cc60fa813b98b842ae815ee9d1bdd721eef5c1fe
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-04-08
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.505-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.505
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.505-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.505-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-slim-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-slim-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-slim-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-slim-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250406-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250406
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24.2-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24.2-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current-graal-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current-graal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-lts-and-current
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-21-and-24-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-21-and-24-graal-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk-21-and-24-graal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-rc1-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.0-rc1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.2-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.7-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.2.7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.41-debian
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.41-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-debian
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-bookworm
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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-a094daa
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-04-08
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-a094daa
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-04-08
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-7dbec13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-7dbec13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-1ba6c80
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-04-07
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
