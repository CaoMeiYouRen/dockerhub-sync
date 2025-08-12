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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-ec4daed
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2025-08-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-c65d8d6ae3430cfbaf97353aa2ab417eea426399
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2025-08-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:c65d8d6ae3430cfbaf97353aa2ab417eea426399
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-08-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-be24ec18dda89207f7c44287b4522b8d7948cb77
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.523-jdk17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.523-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.523
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u462-b08-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u462-b08-jre-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u462-b08-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u462-b08-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u462-b08-jdk-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u462-b08-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:6.9-jdk11-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:6.9-jdk11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:6.9-jdk-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:6.9-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:6.9-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:6.9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:6-jdk8-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:6-jdk8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:6-jdk11-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:6-jdk11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.13-rc2-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.13-rc2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.12-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-9239730
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-08-13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-516f16b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-08-12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-977d3f2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-12d2795
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-59b0e7d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-8c0ec5f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-aa27883
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-828cc7a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2025-08-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-c720748
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-4099159
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-08-11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-4099159
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-08-11
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
