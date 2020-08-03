# JavaScript 简介

## 从不兼容的浏览器中隐藏 JavaScript

1. HTML 注释

```html
<!-- html comment begin
alert('hello world')
// html comment end-->
```

注意最后一行是以 JavaScript 单行注释 `//` 开始的

2. NOSCRIPT 标签

```html
<noscript>
  The javascript code here can not be execute.
</noscript>
```

## 执行顺序

浏览器根据标签出现的先后顺序决定翻译的先后顺序。一般来说，公共的 JavaScript 放在 \<head\> 标签中，优先级比较低的 JavaScript 放在 \<body\> 的最后。

## 调试

> 屏幕输出的方式是最原始的调试方式

同体上来讲，JavaScript 的程序错误主要有两大类：**语法错误**和**语义错误**。

**语法错误**是由于开发者粗心大意写的代码语法检查没有通过导致的。

**语义错误**的代码不违反 JavaScript 语法规则，通常是浏览器可以正确执行代码，但是得到的结果却不是预期的。
