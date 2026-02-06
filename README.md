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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.485-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.485-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.485
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.479.1-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.479.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.486-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.486-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.479.1-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.486
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.479.1-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:2.13.7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.14-slim-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.14-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.14-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.14-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.14-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-slim-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.7-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24.13-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26rc3-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26rc3-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u482-b08-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u482-b08-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u482-b08-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.3.1-jdk25-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.3.1-jdk25-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.3-jdk25-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.3-jdk25-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9-jdk25-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9-jdk25-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6-rc1-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6-rc1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.6.0-oraclelinux9
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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-776aa44
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-02-07
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-5a13ae5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-30f7efb
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-02-06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-28b2cf3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-ba762fd
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-02-05
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b967a68
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-442f456
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-02-06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-442f456
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-02-06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
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
