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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-6120a06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-12-06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-cd541a5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-12-05
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-941aff9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-09f0c4b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-12-04
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-3ce7e21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:60dd8f6ba6263c6ed63f77a280b072c2d31cb05b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2024-12-06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wewe-rss-sqlite:v2.5.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wewe-rss-sqlite:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-jod
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bullseye-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bookworm-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine3.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-slim-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-slim-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-alpine3.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.9-slim-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23.4-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23.4-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23.4-alpine3.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23.4-alpine3.19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.21.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:20240923
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0.16-rc1-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0.16-rc1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.1-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-4b8a30e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2024-12-07
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-c27e93b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2024-12-06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-20335aa
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2024-12-05
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-53d92da
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2024-12-04
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:sha-a5b2393
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:2024-12-07
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:1.2.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-e3e697a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2024-12-06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-199c189
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2024-12-05
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-da48286
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2024-12-04
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
