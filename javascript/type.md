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

需要注意的是：

- 不能也不应该对 Symbol(...) 使用 new。它并不是一个构造函，也不会创建一个对象。
- 传给 Symbol(...) 的参数是可选的，当你传递时，它仅仅是一个字符串描述（对于开发者友好）。
- typeof 的输出是一个新的值 "symbol"，这是识别 symbol 的首选方法。

`Symbol` 函数可以接受一个描述性的字符串，，所以说两个 Symbol 的描述完全可以是相同的，但是其本身必然还是唯一的。

```js
let sym1 = Symbol('A value'),
  sym2 = Symbol('A value')

console.log(sym1 === sym2) // false
```

另外，与大部分的类型不同，Symbol 不会自动转换 String，所以你无法直接 log 一个 Symbol，不过你可以 `console.log(sym1.description)`。

那么 **Symbol 具体有哪些用途**？

通常 Symbol 会用来作为对象的 key，举个 🌰：

```js
function Student(name, age) {
  let nameField = Symbol('name')
  return {
    [nameField]: name,
    age,
    get name() {
      return this[nameField]
    },
  }
}

let mk = new Student('马凯', 21),
  xk = new Student('徐珂', 13)

console.log(mk.name, xk.name) // 马凯 徐珂
mk.name = '马帅凯'
console.log(mk.name) // 马凯
```

`function` 在 JavaScript 中属于一等公民，也就是说一个函数(或方法)也可以通过 Symbol 来实现 “私有化”，当然，和属性一样，属于看得见但是摸不着那种。

### Object
