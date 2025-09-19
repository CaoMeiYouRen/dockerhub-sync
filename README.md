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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-380874aca8abfff9b1aad2cb77b50ecccbc77be5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-2025-09-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:380874aca8abfff9b1aad2cb77b50ecccbc77be5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:2025-09-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub:chromium-bundled-bc3c3542859123f619b0efb31a9b54ed076f7b22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:sts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:alpine-sts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.34.0-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.34.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.34.0-linux-amd64-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/portainer-ce:2.34.0-linux-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0rc3-alpine3.22
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0rc3-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0rc3-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.0rc3-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:apache
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.8.2-fpm-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:6.8.2-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-b6fb6c5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2025-09-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-303a1a7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-c52c032
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-9f15de6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-aebff99
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-6ab1815
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-27a42ae
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-a11c62e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-09-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-a11c62e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-09-19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-55c3fd1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2025-09-18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-55c3fd1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2025-09-18
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
