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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-70e462d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2025-11-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-ccdb89b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.538-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.538-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.538
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.33.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.33.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.33.4-linux-amd64-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.33.4-linux-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:25.2.1-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:25.2-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:25-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.19-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.19-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.12-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.12-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.14-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.14-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20251115-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.4-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24.10-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4.0-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4.0-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-632bacd
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-11-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-37717f8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-c1b897c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-11-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-ef3f6b4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-11-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-ef3f6b4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-11-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-90febde
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:2025-11-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-b7eeaaf
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:1.3.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:sha-d32aefb
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:2025-11-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:sha-e1003cb
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:2025-11-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:latest
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
