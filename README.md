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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.15-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.7-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14.7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260809-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260809-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260809-alpine3.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260809-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20260809-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-502e179
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-08-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-fbd2e9a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-3dced60
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-08-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-6239b4f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-08-16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-a0ce752
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-aeab9a5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-08-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-2914693
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-08-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-79c7066
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:1.18.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-a61becc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-08-15
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-e62a1c3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-b8f0877
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-0debcab
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-08-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-4a35caa
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-976caaa
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-08-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-976caaa
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-08-14
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-e325794
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
