# Node 简介

## Node 诞生

1. 2009 年 3 月，Ryan Dahl 宣布准备基于 V8 创建一个轻量级的 Web 服务器，并提供一套库。
2. 2009 年 5 月，Ryan Dahl 在 Github 发布了出版。
3. 2009 年 12 月，2010 年 4 月，两届 JSConf 大会安排了 Node 讲座。
4. 2010 年底，Node 获得硅谷云计算服务商 Joyent 公司的资助，Ryan Dahl 加入 Joyent 公司，全职负责 Node 的发展。
5. 2011 年 7 月，Node 在微软的支持下发布了 Windows 版本。
6. 2011 年 11 月，Node 超越 Ruby on Rails，成为 Github 关注度最高的项目。
7. 2012 年 1 月，Ryan Dahl 在对 Node 架构设计满意的情况下，将掌门人的身份转交给 Isaac Z. Schlueter，Isaac Z. Schlueter 是 NPM 作者。

## 为什么叫 Node

起初，Ryan Dahl 称他的项目为 web.js，就是一个 web 服务器，但是后来项目发展的超过了最初的单纯开发一个 web 服务器的想法，变成了构建网络应用的一个基础框架。

web.js 项目发展成为一个强制不共享任何资源的，单线程、单进程，包含十分适宜网络的库，为构建大型分布式应用提供基础设施。与此同时，web.js 的目标也成为了构建快速、可伸缩的网络应用平台。他自身非常简单，通过通信协议来组织许多 web.js，非常容易通过扩展来达成构建大型网络应用的目地。每个应用都是构成这个网络的一个节点(Node)，这便是 Node 的由来。

## Node 给 JavaScript 带来的意义

Node 允许 JavaScript 随心所欲的访问本地文件，可以搭建 WebSocket 服务器，可以连接数据库...

Node 不处理 UI，使用和浏览器相同的机制原理运行。Node 打破了 JavaScript 只能在浏览器中运行的局面。

> node-webkit 项目将 Node 中的事件循环和 webkit 的事件循环融合在一起，实现了使用 JavaScript、HTML、CSS 开发桌面应用程序的能力。

## Node 特点

### 异步 I/O

可以理解为到处都是回调，比如：

```js
fs.readFile('/file1', function(err, file) {
  console.log('读取 file1 完成');
});
fs.readFile('/file2', function(err, file) {
  console.log('读取 file2 完成');
});
```

姑且可以暂时理解为两个文件的读取都是“单独起一个线程”去调用，不会影响主线程的执行。但**实际上并没有起其他的线程**，这只是一个比喻，Node 是一个单线程单进程的应用。

像这样的特点，就是所谓的 `异步I/O`。

### 事件与回调函数

绑定 on event，每当触发 event 时，执行回调函数。

```js
req.on('end', function() {
  res.end(postData);
});
```

### 单线程

Node 是单线程的，有以下弱点：

- 无法利用多核 CPU。
- 错误会引起整个应用的退出。
- 大量计算占用 CPU 将导致无法继续调用异步 I/O。

HTML5 Web Workers 能够创建工作线程来进行计算，以解决 JavaScript 大量计算阻塞 UI 渲染的问题。Node 采用了与 Web Workers 相同的思路来解决大计算量问题---child_process。

子进程就是说开多个应用的示例，拼人头，分任务。通过 Master-Worker 管理各个工作进程。

### 跨平台

Node 基于 libuv 实现跨平台。

## Node 应用场景分析

### I/O 密集型

Node 利用事件循环的处理能力，而不是启动每个线程为每个请求服务，占用资源极少。

### CPU 密集型

CPU 密集不可怕，如何合理调度是诀窍。

- Node 可以调用 c/c++ 高效利用 CPU。
- 扩展 c/c++依然不够用，可以扩展应用个数。

## Node 应用案例

- 前后端编程语言环境统一。
- Node 高性能 I/O 用于实时通讯。
- 并行 I/O 高效利用分布式。
- 并行 I/O 提升 Web 渲染能力。
- 云计算平台提供 Node 支持（Azure、阿里云、百度）。
- 实时、并发，适用于游戏开发领域。
- 工具类应用。
