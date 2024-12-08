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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:2024-12-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3.21-node22.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:2024-12-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3.21-node22.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:2024-12-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3.21-node22.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-699613b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-12-08
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-35b7f53
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-6120a06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-12-07
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:1.14.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-12-06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:5c3d6fa348907c340a8d49fa3ee24cf393054441
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2024-12-07
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23.4-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.23-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.22.10-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.22.10-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.22-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.22-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.21.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine:20240923
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:sha-08a89d0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:2024-12-08
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:1.3.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:sha-06c270b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:2024-12-08
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:sha-07fba15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:sha-2332550
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:2024-12-07
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-4c298d7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2024-12-09
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-4b8a30e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2024-12-07
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-c27e93b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2024-12-06
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:sha-a5b2393
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:2024-12-07
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:1.2.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-e3e697a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2024-12-06
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
