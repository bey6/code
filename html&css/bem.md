# BEM

**B**lock **E**lement **M**odifier 是一种书写 CSS 类名的规范，你可以使用它来规范自己的 CSS 代码，统一团队成员对类的命名风格。

一个 **BEM** 风格的 CSS 类的命名应该遵循如下公式：

```txt
Block__Element--Modifier
```

举个 🌰：

```txt
.form {}
.form__header {}
.form__header--dark {}
.form__header--light {}
.form__footer {}
```

众所周知的组件库 [Element UI](https://element.eleme.io/) 在书写 CSS 时，也是采用了 **BEM** 的风格，你可以[点击查看](https://unpkg.com/element-ui@2.13.1/lib/theme-chalk/index.css)。

在样式文件的内部可以看到众多的案例，像：`.el-dialog--center`、`.el-dialog__body`、`.el-dialog__headerbtn`、`.el-dialog__close`、`.el-menu--horizontal`。

---

可能在之前你已经使用过 Element UI 并且修改过期样式，但是不知道你是不是跟我一样，一开始特别在意为什么他们的样式命名好复杂，为什么用双下划线"\_\_"？为什么用双横杠"--"？看起来好复杂！

那在简单的了解了 BEM 规范之后，是不是感觉豁然开朗？

光说不练还是不够的，那么上一个我个人的使用[demo](https://codepen.io/bey6/pen/KKddqbx)吧
