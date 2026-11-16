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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:base3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:base3-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:stable
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:26.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:26.11.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27.4-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27.4-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27.4-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26.11-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26.11-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26.11-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26.11-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.12-rc3-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.12-rc3-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.12-rc3-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.12-rc3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-0e8cbf5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-d117ed1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-36e7ad1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-3bf2eb7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-0f894ae
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-4439248
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b40dacd
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-c877bf3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-66ad22a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-8019de7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-6527333
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:2026-11-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-f2149a9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-5aa3022
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-3eb389d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-8088388
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:1.1.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:platform-1.1.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:2026-11-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-3f98347
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-fac6627
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-6527333
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:2026-11-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-f2149a9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-5aa3022
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-3eb389d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-8088388
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:1.1.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:platform-1.1.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:2026-11-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-3f98347
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-fac6627
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-6527333
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-f2149a9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-5aa3022
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-3eb389d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-8088388
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:platform-1.1.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-3f98347
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:2026-11-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3-node26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3.23-node26.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:alpine3.23.8-node26.13.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:26.13.1-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-mongodb-tools:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:2026-11-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3-node26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3.23-node26.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:alpine3.23.8-node26.13.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:26.13.1-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs-minimize:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:2026-11-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3-node26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3.23-node26.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:alpine3.23.8-node26.13.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:26.13.1-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-nodejs:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:2026-11-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3-bun1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3.23-bun1.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3.23.8-bun1.4.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:1.4.4-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3-node26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alpine-bun:alpine3.23-node26.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-6e6bb98
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2026-11-16
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
