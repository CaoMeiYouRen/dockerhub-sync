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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:stable
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:26.10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:26.10.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-corretto-al2023
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-corretto
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-dec224f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-11-01
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-beb5f7a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-10-31
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:1.19.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-17be98f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-10-31
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-0571960
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-10-31
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-b436030
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-7c6b2d8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-258027e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-4d60482
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-10-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-419bb9a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-fcdcc68
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-551cee0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-9bff1f9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-cebe4c1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:2026-10-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-a61ed5f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-72ef6c8
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-10-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-b3ab870
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:sha-d1dfb3b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:2026-10-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/sharp-cloud-uploader:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:sha-748982c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:2026-10-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/auto-backup-database:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-bcd1c8f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2026-10-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:sha-3afe554
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:2026-10-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:sha-ed3a686
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:2026-10-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-sha-ed3a686
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-2026-10-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hono-template:bun-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:sha-2f26353
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:2026-10-30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:sha-b3a59fb
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/push-all-in-cloud:2026-10-30
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
