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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:2024-12-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3.21-node22.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:2024-12-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:2024-12-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3.21-node22.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:2024-12-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:2024-12-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3.21-node22.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:2024-12-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-5908415
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-12-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-402e00b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-12-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-aff6810
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-16ec15d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-5b18b66
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-d3257ad
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-12-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:6e5738e4dce8464e4b072ba59dc1d4a02f6fb036
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2024-12-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:stable
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:0.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:0.23.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:alpine-sts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:sts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.25.0-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.25.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.25.0-linux-amd64-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.25.0-linux-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.25.0-linux-arm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.25.0-linux-arm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wewe-rss-sqlite:v2.6.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wewe-rss-sqlite:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wewe-rss-sqlite:v2.6.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-3c74d20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2024-12-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-b9e4a94
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2024-12-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-9cabb22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2024-12-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-9cabb22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2024-12-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-12ee2ad
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2024-12-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-12ee2ad
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2024-12-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:2024-12-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3.21-node22.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:2024-12-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:sha-6d75c88
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:2024-12-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:sha-d56a6be
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:2024-12-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-5e11f43
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:2024-12-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:sha-9ebccf8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:2024-12-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:sha-e2bcaf9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:2024-12-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:bun-sha-e2bcaf9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:bun-2024-12-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:sha-45cd3d9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:1.4.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:bun-sha-45cd3d9
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
