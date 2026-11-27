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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.16.0a2-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.16.0a2-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27.0.1.0-jre
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27.0.1.0-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.9.2-jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.9-jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9-jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.8-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.8-jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.8-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.8-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.8-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14-jdk
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:8-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.4-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.8-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4.8-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4.8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.12.0-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.12.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.12-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.10.3-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.10.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.6-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.6-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-5db32e0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:2026-11-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-01acf4f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-3f4bb87
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-ed8cd69
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-995ed82
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-fa93135
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-cf8836c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-b54f9be
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-2f1dac9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:2026-11-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-5db32e0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:2026-11-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-01acf4f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-3f4bb87
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-ed8cd69
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-995ed82
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-fa93135
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-cf8836c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-b54f9be
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-2f1dac9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:2026-11-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-5db32e0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-01acf4f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-3f4bb87
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-ed8cd69
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-995ed82
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-fa93135
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-cf8836c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-b54f9be
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-2f1dac9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-c3181f2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-e227cc2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-e0c63cf
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-c1f378c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-2cbc0f4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-00853bf
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-d17f4ed
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-abd882c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-0dac53b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-f89ec10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-ba943ca
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-eb01c41
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
