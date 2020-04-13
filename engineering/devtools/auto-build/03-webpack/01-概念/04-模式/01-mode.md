# mode

mode 有两种：

- development
- production

## 用法

1. 在配置文件中

```javascript
module.exports = {
  mode: 'production'
};
```

2. CLI 中

```
webpack --mode=production
```

> 设置 NODE_ENV，不等于设置 mode

不同的 mode 会有不同的行为。
