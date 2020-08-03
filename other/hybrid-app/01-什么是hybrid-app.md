# 01-hybrid app 简介

## 移动端 App 的种类

- native-app
- web-app
- hybrid-app

## 各种 App 的特点

### native-app

native-app 拥有非常友好的用户体验，很好的支持对底层相关的访问，但开发成本比较高，在面对频繁的变化时，显的有些难以应对。

优点：

- 优质的体验
- 强大的底层支持
- 资源的高访问权限

缺点：

- 需要挂商店，需要独立下载
- 搜索引擎不友好
- 开发周期长，版本独立维护
- 不跨平台

### web-app

web-app 其实就是针对移动端开发的网站，用户体验自然是要差了点，对一些底层功能的支持也不友好，不过其开发速度非常快，并且本身就支持跨终端跨平台。

优点：

- 不需要挂商店，不需要单独下载
- 搜索引擎友好
- 开发周期短，便于维护
- 跨平台

缺点：

- 用户体验差
- 受网络影响大
- 安全性低
- 硬件支持不友好

### hybrid-app

hybrid-app 介于 nativ-app 与 web-app 之间，他的体验接近 native-app 开发成本接近 web-app，属于一种折中的移动端应用开发的解决方案。

其实就是两种 app 混合到一起开发，视情况不同选择不同的方式开发。

### 对比

| 项       | Web App（网页应用） | Hybrid App（混合应用） | Native App（原生应用） |
| -------- | ------------------- | ---------------------- | ---------------------- |
| 开发成本 | 低                  | 中                     | 高                     |
| 维护更新 | 简单                | 简单                   | 复杂                   |
| 用户体验 | 差                  | 良                     | 优                     |
| 应用商店 | 不支持              | 支持                   | 支持                   |
| 独立安装 | 不需要              | 需要                   | 需要                   |
| 跨平台   | 是                  | 是                     | 否                     |

## Hybrid App 的分类

- 多 View 混合型
- 单 View 混合型
- Web 主体型
- 复合型 Hybrid

### 1. 多 View 混合型

Native View 与 Web View 都是独立的，交替出现，以 Native 为主， Web 为辅。

### 2. 单 View 混合型

一个 View 中，既包含 Native View 又包含 Web View。

### 3. Web 主体型

Web 为主，Native 为辅。

### 4. 复合型 Hybrid

复合型 Hybrid 是应用的主体可以是二者的混合，代表框架是 kerkee。

|          | 多 View | 单 View | Web 主体 | 复合型 Hybrid |
| -------- | ------- | ------- | -------- | ------------- |
| 应用主体 | Native  | Native  | Web      | Native + web  |
| 开发成本 | 中      | 高      | 低       | 中            |
| 用户体验 | 良      | 优      | 差       | 良            |

## 开发框架选择

- react native
- weex

### 1. [Ionic](https://ionicframework.com/)

Ionic 框架集成了 Angular、React，Vue 还不支持。

项目启动超快，部署文档仿佛也听全面。

### 2. React Native

主要使用 JavaScript 和 React 开发

### 3. Weex

主要使用 JavaScript + Vue.js 或 JavaScript + Rax(像 React) 开发
