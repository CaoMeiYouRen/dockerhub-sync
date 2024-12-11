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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:2024-12-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3.21-node22.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:2024-12-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3.21-node22.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:2024-12-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3.21-node22.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-25e2c88
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-12-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-55e0784
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-12-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-360f60b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-12-10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-cf8311a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-9ff6036
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-12-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:7c5a04fa7a06a61708215d374eb00a1d9a5355e0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2024-12-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.489-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.489-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.489
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.489-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-bookworm-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:23.4-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.16-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10.16-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.10-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.4-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-16bcf30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2024-12-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-d11a399
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2024-12-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-63cddc4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2024-12-10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-4ac4c8e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2024-12-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:2024-12-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3.21-node22.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-8b546a8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2024-12-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-137224e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-183ba3e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-ed12b39
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-91b662c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-d4c9a65
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:sha-c94b880
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:2024-12-10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:sha-1f5d367
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:sha-f9f123e
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
