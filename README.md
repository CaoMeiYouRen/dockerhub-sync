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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.3.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:version-5.3.1_v2.1.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.3.1_v2.1.3-ls490
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:5.3.1-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-version-5.3.1_v1.2.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1-5.3.1_v1.2.20-ls145
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.3.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.3.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-version-5.3.1_v2.1.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.3.1_v2.1.3-ls490
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-version-5.3.1_v2.1.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.3.1_v2.1.3-ls490
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-5.3.1-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:amd64-5.3.1-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-libtorrentv1-version-5.3.1_v1.2.20
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/qbittorrent:arm64v8-libtorrentv1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/freshrss:edge-alpine
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.580.3-lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.580.3
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.580.3-lts-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.580.3-lts-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.580.3-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.580.3-slim
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.580.3-slim-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.580.3-lts-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.580.3-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts-slim-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.580.3-slim-jdk25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:2.580.3-lts-rhel-ubi9-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/jenkins:lts-rhel-ubi9-jdk21
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/memos:canary
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-1.24.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-1.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:1.24.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:arm64v8-1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:1.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-1.24.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:i386-1.24.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/watchtower:amd64-1.24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-lithium
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lithium-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lithium-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:lithium
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:krypton
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:jod
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:current
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/node:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.16-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12.16
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.12
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.18-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.18-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11.18
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.16.0a2-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.16.0a2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.16-rc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.2-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/python:3.15.2-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261122-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261122-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip-20261122
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:tip
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27.4-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27.4-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.27
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26.11-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26.11-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/golang:1.26-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21.0.13.1_2-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21.0.13.1_2-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-jre-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:21-jdk-noble
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u512-b09-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u512-b09-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u512-b09-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8u512-b09-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-ubi9-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:8-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27.0.1.1_4-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27.0.1.1_4-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27-jre-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/eclipse-temurin:27-jdk-ubi10-minimal
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk8-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk27-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk25-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk21-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk17-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-ubi9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:jdk11-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.9.2-jdk27-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.9.2-jdk27-ubi
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/gradle:9.9.2-jdk25-ubi10
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:bookworm
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
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2.11-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2.11
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2-bookworm
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.2
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/redis:8.12.0-trixie
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:lts
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:innovation
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.4.1-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.4.1-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.4.1
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.4-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.4-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7.4
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9.7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9-oraclelinux9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/mysql:9-oracle
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-4a33e8d
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-7b56079
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-09a084a
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-3b9cb5e
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-5eb7dd7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-537b3cc
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-45ab0c9
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-2ac918f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:2026-11-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/momei:sha-0684712
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-2f1ed3c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-3b308de
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-4220c7f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-9cdaa54
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:2026-11-25
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/caomei-auth:sha-1c3a686
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-5a59ff7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:2026-11-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-b6b105b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:2026-11-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-91b4e26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox-full:sha-e4d715c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-5a59ff7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:2026-11-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-b6b105b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:2026-11-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-91b4e26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix-sandbox:sha-e4d715c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-5a59ff7
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-b6b105b
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:2026-11-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-91b4e26
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/dependfix:sha-e4d715c
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-4b2bf71
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:2026-11-24
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:latest
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-4a8d00f
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:sha-578fea0
registry.cn-hangzhou.aliyuncs.com/caomeiyouren/rss-impact-server:1.19.6
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
