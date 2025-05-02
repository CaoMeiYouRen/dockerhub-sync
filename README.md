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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:b638c778487cc86e22d52c3692d9511a8b6b2ef1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-05-02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/alist:main-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.27.5-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.27.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.27.5-linux-ppc64le-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.27.5-linux-ppc64le
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.27.5-linux-arm64-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.27.5-linux-arm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk24-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk24-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3-apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.2-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-1f958a2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-05-02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-1f958a2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-05-02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-f22cee3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-05-01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-f22cee3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-05-01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-b2658c6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2025-05-01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-a869803
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2025-05-01
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
