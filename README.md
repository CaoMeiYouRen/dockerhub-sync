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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-43857c5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-12-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-76322de
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-12-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-5420c56
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-291a582
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-dfc2450
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-633ec73
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-12-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:5ffc73e8e240b6d2f401d13b002c3bd97ef94ca6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2024-12-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.490-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.490-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.490
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.490-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:alpine-sts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:sts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.25.0-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.25.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.25.0-linux-amd64-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.25.0-linux-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.25.0-linux-arm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.25.0-linux-arm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-cbdb0a4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2024-12-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-cbdb0a4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2024-12-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-400bc63
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2024-12-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-400bc63
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2024-12-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-a0f6142
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:2024-12-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-3e7c9ed
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:1.1.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-3c74d20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2024-12-16
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
