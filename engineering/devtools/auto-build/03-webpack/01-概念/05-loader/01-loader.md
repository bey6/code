# loader

loader 用于对模块的源代码进行转换，使你在 `import` 或 `加载`模块时预处理文件。

loader 类似于其他构建工具中的 `task`。

**使用场景**

- loader 可以将 ts 转 js
- loader 可以将 `内联图像` 转 `dataURL`
- loader 可以在 `js` 中 `import` css

## loader 用法

loader 有三种使用方式：

1. 配置（**推荐**）：在 `webpack.config.js` 中配置
2. 内联：在 `import` 时指定
3. CLI：在 `命令行接口` 指定

### 配置

> 推荐使用该方式配置 loader

webpack.config.js

```javascript
module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  }
};
```

### 内联

在每个需要转换的资源的 import 中显示的指定 loader

```javascript
import Styles from 'style-loader!css-loader?modules!./styles.css';
```

### CLI

```javascript
webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
```
