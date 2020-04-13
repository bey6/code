# 入口起点

入口参数的写法有三种：

1. 单个入口 string
2. 多个入口 string[]
3. 对象语法 {[entryChunkName: string]: string|Array<string>}

## 单个入口语法

**webpack.config.js**

```
const config = {
  entry: {
    main: './xxx/file.js'
  }
}
```

简写为：

```
const config = {
  entry: './xxx/file.js'
}
```

## 多个入口语法

**webpack.config.js**

```
const config = {
  entry: ['src/index.js', 'src/main.js']
}
```

## 对象语法

**webpack.config.js**

```
const config = {
  entry: {
    app: './src/app.js'
    vendors: './src/vendors.js'
  }
}
```

## 常见场景

**单页面应用程序**
**webpack.config.js**

```
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
}
```

两个入口 webpack 从 app.js 和 vendors.js 开始创建依赖图（dependency graph）。这些依赖图彼此分离、互相独立。这种方式常见于只有一个入口起点（不包括 vendor）的单页面应用程序中。

**多页面应用程序**
**webpack.config.js**

```
const config = {
  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  }
}
```

三个入口告诉 webpack 需要 3 个独立分离的依赖图。

在多页面应用中，每当页面跳转时，服务器将获取一个新的 HTML 文档。页面重新加载新的文档，并且资源被重新下载。

使用 CommonsChunkPlugin 为每个页面间的应用程序共享代码创建 bundle。由于入口起点增多，多页面应用能够复用入口起点之间的大量代码/模块。
