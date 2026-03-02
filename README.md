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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.1.4-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-version-release-5.1.4_v1.2.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-release-5.1.4_v1.2.20-ls105
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.1.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:version-5.1.4-r2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.1.4-r2-ls443
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.1.4-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.1.4-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.12-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13.12-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-slim-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.13-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.1-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:php8.5-fpm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-cc2dc04
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-03-03
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-d24c849
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-03-02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b273ccf
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-69ddf9b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-03-01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-5d9cc92
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b85ff64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-7be9ee7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-03-02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-7be9ee7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-03-02
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-a7e8a25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-83ec6db
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-03-01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-fd88f5d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:sha-46aaf29
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:2026-03-01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/cookie-cloudflare:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:sha-907e16f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:2026-03-01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-03e58c6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2026-03-01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:sha-917dca4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:2026-03-01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:sha-804ed47
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:2026-03-01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:latest
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
