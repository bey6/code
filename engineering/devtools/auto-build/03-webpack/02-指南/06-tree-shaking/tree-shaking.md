# tree shaking

tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的 dead-code(未引用代码)。它依赖于 ES6 模块系统中的 静态结构特性。

当 import 的模块并不是完全被引用时， webpack 将自动移除 dead-code。

## 处理 dead code

webpack.config.js 中，设置 mode: 'development' 默认是不开启压缩和 tree shaking 功能的。

当 mode: 'production' 时，将启动 tree shaking 和压缩功能。

**side-effect-free(无副作用)**

通过 package.json 的 sideEffects 属性，可以设置是否包含副作用。

```
{
  "sideEffects": false
}
```

也可以设置一个数组：

```
"sideEffects": [
  "./src/some-side-effectful-file.js",
  "*.css"
]
```

**副作用**

在导入时会执行特殊行为的代码，而不是仅仅暴露一个或多个 export。

## 压缩输出

production mode 有压缩的功能。

## 总结

production 模式启动 tree shaking 和压缩功能。
development 模式不启动 tree shaking 和压缩功能。
