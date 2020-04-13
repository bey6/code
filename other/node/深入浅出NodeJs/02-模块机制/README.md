# 模块机制

## CommonJs 规范

CommonJs 规范为 JavaScript 制定了一个美好的愿景 --- 希望 JavaScript 能够在任何地方运行。

CommonJs 规范的提出，主要是为了弥补 JavaScript 没有标准的缺陷，以达到 Python、Ruby 和 Java 具备开发大型应用的基础能力。

## 关系

W3C：制定 BOM、DOM 标准。
ECMAScrip：制定 JavaScript 在 浏览器中的运行标准。
浏览器：包含 BOM、DOM、JavaScript(ECMAScript 标准)。
CommonJs：非浏览器环境下运行标准。
Node：ECMAScript + CommonJs。

## CommonJs 模块

CommonJs 对模块的定义主要分为：模块引用、模块定义、模块标识。

### 模块引用

```js
const math = require('math');
```

### 模块定义

module 对象表示模块自身，module 对象上的 exports 属性用于导出当前模块的方法或变量。

在 Node 中，一个文件就是一个模块。

这里定义了一个模块 [math.js](math.js)，并且在 [index.js](index.js) 模块中引用了 math 模块。

### 模块标识

模块表示是 require() 中的参数，他必须是 小驼峰字符串，可以是相对路径或绝对路径，可以没有.js 后缀名。

## Node 的模块实现

需要知道的是 Node 并没有完全的遵从 CommonJs 规范。

在 Node 中，引入一个模块需要经历如下 3 步：

1. 路径分析
2. 文件定位
3. 编译执行

Node 中的模块分为两类： 核心模块(Node 提供)、文件模块(用户编写)。

`核心模块`在源码编译过程中，被一并打包成二进制文件，并随着 Node 进程的启动，加载到内存中。因此核心模块的加载省略了文件定位和编译执行两个步骤，并且在路径分析中具有高优先级，达到最快的加载速度。

`文件模块`是在运行时动态加载的，需要经历模块加载的完整过程，载入速度慢。

### 缓存

require() 方法对相同模块的第二次加载会优先使用缓存，核心模块的缓存检查要早于文件模块的缓存检查。

### 路径分析和文件定位

#### 模块标识符分析

标识符的种类：

- 核心模块
- `.` 或 `..` 开头的相对路径文件模块
- `/` 开头的绝对路径文件模块
- 自定义文件模块

**加载速度：**

核心模块 > 路径模块 > 自定义模块

**模块路径：**

模块路径是 Node 在定位`文件模块`的具体文件时制定的查找策略，具体表现为一个路径组成的数组。

参考 [./module-search/module_path.js](./module-search/module_path.js)

模块路径的生成规则是沿着路径向上逐级递归，直到根目录下的 node_modules 目录。

加载的过程中，Node 会逐个尝试模块路径中的路径，直到找到目标文件为止。

**关于扩展名分析**

require() 的标识符可能会没有扩展名，这时候 Node 会按照 .js、.json、.node 的次序依次尝试。所以 .json 和 .node 文件推荐带上扩展名。

require() 标识符定位一个目录也是允许的，此时 Node 会将目录当作一个包来处理。

Node 处理一个包的方式如下：

1. 查找 package.json 解析出包描述对象
2. 取出 main 属性指定的文件名进行定位
3. 如果 main 属性定位失败，则依次查找 index.js、index.node、index.json

### 模块编译

在 Node 中，每个文件模块都是一个对象。

```js
function Module(id, parent) {
  this.id = id;
  this.exports = {}; // 这就是我们导出所使用的 exports 对象
  this.parent = parent;
  if (parent && parent.children) {
    parent.children.push(this);
  }
  this.filename = null;
  this.loaded = false;
  this.children = [];
}
```

编译执行时引入文件模块的最后一个阶段，对于不同的文件扩展名，载入方法也有不同：

- .js，通过 fs 模块同步读取文件后编译执行
- .node， c/c++编写的扩展文件，通过 dlopen()方法加载最后编译生成的文件
- .json，通过 fs 模块同步读取，JSON.parse()解析返回
- 其他，作为 .js 载入

每个编译成功的模块都会将其文件路径作为索引缓存在 Module.\_cache 对象上。
