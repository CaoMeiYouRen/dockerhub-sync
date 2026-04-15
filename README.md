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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.59.0-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.59.0-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.59.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.59.0-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.555.1-lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.555.1-lts-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.555.1-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.555.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.555.1-lts-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.555.1-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.555.1-lts-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:v0.12.10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:v0.12.10-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:v0.12.10-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.0a8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.4.1-jdk21-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.4.1-jdk17-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.4-jdk21-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.23.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.45-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.45-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0.45
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:8.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-2660db7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-04-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-2660db7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-04-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-5d48c9f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-5d48c9f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-e045a1e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-8cf0294
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-2ce343b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2026-04-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:sha-adbb635
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:2026-04-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:sha-549908d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:2026-04-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b8cbf07
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-04-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b12db71
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-e11d937
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-8728d06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-04-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-66bf8a4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-f174be1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-04-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-b52b253
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2026-04-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
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
