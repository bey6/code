# Chrome 浏览器的多进程架构设计

## Chrome 中的 5 个进程

![chrome 多进程架构图](https://s1.ax1x.com/2020/03/31/GKSJlq.png)

- 浏览器进程

  负责页面显示、用户交互、子进程管理、存储等

- 渲染进程

  核心任务是将 HTML、CSS、JavaScript 转换为可交互页面，排版引起 Blink 与 JavaScript 引擎 V8 都是允许在该进程中的。默认情况下，每个 tab 标签都会创建一个独立的渲染进程。处于安全考虑，渲染进程都是运行在沙箱模式下。

- GPU 进程

  最初是为了实现 _3D CSS_ 效果，随后 _网页_ 和 _Chrome UI_ 都采用 GPU 来绘制了

- 网络进程

  网络资源的加载

- 插件进程

  由于插件容易崩溃，为了不影响浏览器和页面，通过插件进程隔离插件的运行

也就是说，随便打开一个页面，Chrome 都至少需要启动 4 个进程：浏览器进程、渲染进程、网络进程、GPU 进程，如果这个页面用到了插件，那么还会额外启动一个插件进程。

## 多进程架构的不足

- 更高的资源占用
- 更加复杂的体系架构

## Chrome 的未来

2016 年，Chrome 官方团队使用 _面向服务的架构(**S**ervices **O**riented **A**rchitecture)_ 的思想设计了新的 Chrome 架构，这也是 Chrome 未来的发展方向。

原来的各种模块会被重构成为独立的服务（Service），每个服务都可以在独立的进程中运行，访问服务必须使用定义好的接口，通过 IPC 来通信。

![SOA 架构](https://s1.ax1x.com/2020/03/31/GKScX6.png)

Chrome 最终要把 UI、数据库、文件、设备、网络等模块都重构为基础服务（**C**hrome **F**oundation **S**ervice），类似操作系统的底层服务。
