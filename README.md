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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:latest-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:v4.2.4-ffmpeg
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:latest-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:v4.2.4-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:latest-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:v4.2.4-aria2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:v4.2.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:latest-lite-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/openlist:v4.2.4-lite-aio
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk26-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk26-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.1-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.1-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.1-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.8-alpine3.23
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.1-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.1-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:sha-96598c5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:2026-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:sha-243d818
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:sha-4c715d3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:sha-62a361c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:sha-13cd991
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:sha-52b7128
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:sha-e1c6e87
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:sha-aafeabb
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-80d2000
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-2be9acd
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-8dfa4d6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-07-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-1865b1f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-f48f39b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-07-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-cca77f1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-db424e4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-8dd4d88
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-2e559cb
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-8dd3d2a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:sha-e1cbc4c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:2026-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/onebot-status-helper:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-0903914
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-0158cc6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-0158cc6
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-516f990
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-07-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-516f990
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-4af9cda
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2026-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-0430f05
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-0ba875a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2026-07-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-2b897d2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-7ef94fe
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-719b02e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2026-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-cd62846
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:2026-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-71e15f1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:2026-07-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:sha-2e3ae74
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:2026-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:sha-2303ddc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:2026-07-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:sha-346c43d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:2026-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:sha-dc6686c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rsshub-never-die:2026-07-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-aeb8bf8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:2026-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:sha-9b123bd
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:2026-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-resources-download:sha-b5f424f
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
