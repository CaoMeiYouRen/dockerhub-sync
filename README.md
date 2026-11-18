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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.5.12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:next
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.5.12-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:next-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2.5.12-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:2-rootless
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.591
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.591-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.591-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.591-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.591-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.591-slim-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.591-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:alpine3.24-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:alpine-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.39.9-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.39.9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.39.9-linux-amd64-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.39.9-linux-arm64-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.39.9-linux-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.39.9-linux-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.39.9-linux-ppc64le-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.39.9-linux-ppc64le
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:1.24.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-1.24.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-1.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:1.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-1.24.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-1.24.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-1.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.18-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.16-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.10-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.18-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261115-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261115-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261115-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261115-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261115-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261115
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.7-jdk8-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.7-jdk8-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.7-jdk11-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.7-jdk11-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk8-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk8-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk11-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk11-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk8-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk8-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk11-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk11-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9.0.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-68ac1fa
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-59658e2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-6964e10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-881bc16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-8bba651
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-4a6efc7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b00b004
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-893301e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-70a6f3a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-96609b8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-c7446c7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-681b246
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:2026-11-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-fd45a27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-666b95a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-0b0034e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-cdae07b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-8262a72
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:2026-11-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-46957b6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-20ef228
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-681b246
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:2026-11-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-fd45a27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-666b95a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-0b0034e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-cdae07b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-8262a72
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:2026-11-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-46957b6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-20ef228
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-681b246
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-fd45a27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-666b95a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-0b0034e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-cdae07b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-8262a72
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-46957b6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-20ef228
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:sha-cc04bd2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:2026-11-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:sha-8d83dbc
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
