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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-5dc1e4f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2025-08-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-d5eed47
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2025-08-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-68071673154a9f19a46a2eb26696d9760276b8eb
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2025-08-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:68071673154a9f19a46a2eb26696d9760276b8eb
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-08-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-86e1fde5d79b8da9aa2a88863db59870871e5213
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.0-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24.6-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24.6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-c13f444
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-08-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-10f3fd6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-2bd80f6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-f06ed04
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-08-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-3785088
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-f3b39e1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-f3fc362
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:sha-a913a34
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:2025-08-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-2c3cc52
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2025-08-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-bda653e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2025-08-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-0668023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-d0e4c2d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-56907d8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-558735a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2025-08-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-0e9b1bc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-b9011d3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-10f79a9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-08-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-10f79a9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-08-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
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
