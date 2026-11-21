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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:base2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/uptime-kuma:base2-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:resolute
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.3.17-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.3.17
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.3-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.38-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0.38
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0.48-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0.48
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7-jammy
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mongo:7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12.0-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2.12-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2-php8.5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/wordpress:cli-2-php8.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-596c25f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-4ffc7e3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:1.31.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-29a7c26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b78c209
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-d398ea1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-1e11740
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-8cc2e89
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-26ee7d4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-d9ee555
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-f686271
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:1.18.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-b3100bd
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-4c7a3aa
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-70d4341
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-4cf7d19
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-7b38146
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-6a28ad0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:2026-11-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:1.2.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:platform-1.2.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-c55c5d1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-e35b612
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-b1f1f7e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-ca00093
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:2026-11-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-05e5563
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-6a28ad0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:2026-11-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:1.2.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:platform-1.2.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-c55c5d1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-e35b612
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-b1f1f7e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-ca00093
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:2026-11-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-05e5563
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-6a28ad0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:platform-1.2.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-c55c5d1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-e35b612
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-b1f1f7e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-ca00093
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-05e5563
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-82d5e50
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-11-21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:1.19.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-1ffe198
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-11-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-1ffe198
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-11-20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:sha-9c65b80
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:2026-11-20
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
