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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-dd4a5e5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2025-07-29
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-614963a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-59e277d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2025-07-28
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-9a2d8e7fff6ce29039ba75f329f272c57c65918d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2025-07-29
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:9a2d8e7fff6ce29039ba75f329f272c57c65918d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-07-29
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-4f79cc1c2afa035e089f89b658749624fd744529
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.47.0-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.47.0-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.47.0-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:v3.47.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.521-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.521
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.521-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250726-bullseye
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250726-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250726-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250726-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250726-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-ec770c3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-07-29
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-9e550c8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-f647622
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-8073657
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-a6827ce
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-079f384
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-17fd80f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-e7202b8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-c0b3dfb
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2025-07-29
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
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
