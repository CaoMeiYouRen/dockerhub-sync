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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-bdc80d5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2024-10-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-41aa93f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2024-10-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-671e0c8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2024-10-22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-aa8cd85
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-10-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-d171f96
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-4382b01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-10-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-502c577
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2024-10-22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-9a5c5ad
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:7a74a131d531d170648d05e6fc9ed95d48ec438b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2024-10-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.482-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.482
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.482-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.482-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21.0.5_11-jre-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21.0.5_11-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21.0.5_11-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21.0.5_11-jdk-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-jre-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk23-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-focal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.10.2-jdk8-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.10.2-jdk8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.10.2-jdk23-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.10.2-jdk23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.10.2-jdk11-focal
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
