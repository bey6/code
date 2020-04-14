# JavaScript 类型

## JavaScript 的 7 中原始类型

- Undefined
- Null
- Boolean
- String
- Number
- Symbol
- Object

### Undefined

### Null

### Boolean

### String

### Number

### Symbol

> In a JavaScript runtime environment, a symbol value is created by invoking the function `Symbol`, which dynamically produces an anonymous, unique value. A symbol may be used as an object property.
>
> Symbol can have an optional description, but for debugging purposes only.

我们可以通过调用 `Symbol` 函数用来产生一个*匿名唯一值*。匿名意味着你没办法看到这个值，唯一则说明他是唯一的即使你看不到它的值是什么。

`Symbol` 函数可以接受一个描述性的字符串，但是它仅仅是一个描述（对于开发者友好），所以说两个 Symbol 的描述完全可以是相同的，但是其本身必然还是唯一的。

```js
let sym1 = Symbol('A value'),
  sym2 = Symbol('A value')

console.log(sym1 === sym2) // false
```

另外，与大部分的类型不同，Symbol 不会自动转换 String，所以你无法直接 log 一个 Symbol，不过你可以 `console.log(sym1.description)`。

### Object
