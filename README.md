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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-45d23f8aebeb7bbfde4ad6f5252fad057e9009f7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2025-08-22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:45d23f8aebeb7bbfde4ad6f5252fad057e9009f7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-08-22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250815-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250815-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20250815
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.25.0-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u462-b08-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u462-b08-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u462-b08-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u462-b08-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk24-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk24-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-ubi-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.4.0-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-94faf5d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2025-08-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-7b2f497
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2025-08-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:1.4.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-33e4dd5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-e4c9308
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-7a7c8b9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-7f495b7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-02b6d19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-08-23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:1.4.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-203fd11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-bcd7410
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-d369248
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-3ef788f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-3ef1856
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
