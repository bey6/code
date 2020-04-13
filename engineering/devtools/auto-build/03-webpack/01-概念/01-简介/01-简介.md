# webpack

## 概念

webpack 是一个 JavaScript 应用程序的静态打包器(module bundler)。

webpack 将程序所需模块/资源/样式打包成一个或多个 bundle。

差不多是说，webpack 分析项目结构，将相关的资源捆绑到一起生成一个或者多个 bundle。

## 为什么要用 webpack

假如说现在我们要使用 typescript / scss 等开发页面，那么在不使用 webpack 等相关工具之前，是非常麻烦的，因为最终他们都需要生成对应的浏览器可识别文件才可以使用。

有了 webpack，这些都变得简单了。

## webpack 四个核心概念

首先参考以下配置文件：

**webpack.config.js**

```
module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
```

- entry(入口)
- output(输出)
- loader(加载器)
- plugins(插件)

### entry

**webpack.config.js**

```
module.exports = {
  entry: 'index.js',
}
```

`entry` 配置 webpack "入口文件"，差不多可以理解为程序启动时从这个文件开始

### output

**webpack.config.js**

```
module.exports = {
  output: {
    path: './dist',
    filename: 'xxx.bundle.js'
  }
}
```

`output.path` 设置输出的目录
`output.filename` 设置输出文件名

### loader

**webpack.config.js**

```
module.exports = {
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
}
```

`module.rules` 用于配置 loader，他是一个数组，因此支持配置多个 loader

每一个 loader 有 **2** 个 **必要** 的字段，分别是：

- `test`: 正则表达式，用于匹配出本 loader 的作用目标
- `use`: 配置 loader，上例配置了一个叫做 raw-loader 的 loader

### plugins

**webpack.config.js**

```
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
}
```

`plugins` 是一个数组，因此他可以配置多个插件，插件可以做的事情取决于插件都能做什么。

> loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。

### mode

另外还有一个比较常见的参数 `mode`。

```
module.exports = {
  mode: 'production'
}
```

`mode` 可以设置 `development` 或 `production`，通过启动不同的模式，可以切换相应的配置
