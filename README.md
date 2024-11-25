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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:2024-11-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3.20-node22.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:2024-11-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3.20-node22.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:2024-11-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3.20-node22.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-ecce286
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-11-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-7b28074
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-27b649c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-d8b1f44
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-11-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:1.12.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:4c3dffa63f2195cd630bf44578ed2187486a4a69
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2024-11-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-a71fd6c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2024-11-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-ecce286
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-11-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-7b28074
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-27b649c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-d8b1f44
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-11-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:1.12.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-85b8235
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2024-11-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-731337d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2024-11-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-69cd531
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:2024-11-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3.20-node22.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:2024-11-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3.20-node22.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:2024-11-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3-node22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3.20-node22.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-588b137
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:2024-11-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-fb90e74
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:1.0.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-59eb184
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-ac9d96a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:1.0.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-580cd91
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-842e74b
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
