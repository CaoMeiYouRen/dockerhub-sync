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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.19-slim-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.19-slim-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.19-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.19-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.19-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.19-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.19-alpine3.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.19-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-slim-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23rc2-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23rc2-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23-rc-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23-rc-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.22.5-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:22.0.2_9-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:22.0.2_9-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:22.0.2_9-jre-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:22.0.2_9-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:22.0.2_9-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:22.0.2_9-jdk-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:22-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:22-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk22-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-focal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.9.0-jdk22-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.9.0-jdk22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.9.0-jdk11-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.9.0-jdk11-focal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.9.0-jdk11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-rc2-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-rc2-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-rc2-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-rc2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-rc-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-rc-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.0.1-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:2.8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:2.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/registry:2
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
