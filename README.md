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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:stable
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:0.30
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:0.30.0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-amd64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/new-api:latest-arm64
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-nightly
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.10-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.10-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.10-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4.10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:7-alpine3.21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-1936990
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-07-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b8e2830
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-06d4915
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-b960945
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-e62367b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-2458ab3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-365ed94
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-6909b00
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-02aedf5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:2026-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/afdian-linker:sha-bb3eef5
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:sha-6132f8d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:2026-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/hexo-cloudflare-counter:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:sha-3db8141
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:2026-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/tinyfish-mcp:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:sha-139210f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:2026-07-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-image-download:latest
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
