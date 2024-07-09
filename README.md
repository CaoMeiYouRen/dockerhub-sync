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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-2d8f488
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2024-07-05
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:1.2.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-c0a5267
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:1.2.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-ff2608b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-0f829e6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2024-07-04
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:1.1.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-4c09283
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-07-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-d266a37
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-07-08
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-2fb8a41
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-ac376ef
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-07-07
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-d9f1671
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-192114e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:6a29ca395191e745f991b9a0643a2fa9a66c8730
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2024-07-08
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.466-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.466-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.466
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.466-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/nginx-proxy-manager:2.11.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-iron
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:iron-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:iron-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:iron
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:20.15.0-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:20.15.0-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:20.15.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.19-slim-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.19-slim-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.19-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.19-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.19-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-slim-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-slim-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23rc1-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23rc1-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23-rc-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23-rc-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.22.5-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u412-b08-jre-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u412-b08-jdk-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk22-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.0-rc11-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0-rc-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.0.0-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.10.0-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.10.0-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.10.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.10-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.10-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2-php8.3
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
