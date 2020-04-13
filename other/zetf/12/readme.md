# 异步编程最佳实践

## 异步编程中的错误处理

- 无法使用返回码
- 无法抛出异常

最常用的错误处理方式就是 callback，在异步请求时，注册 onSuccess()、onFailure() 这样的函数。

## JavaScript 异步编程错误处理

### 异步回调与回调地狱

异步编程事件处理的第一阶段就是回调函数，在比较简单的场景下这样是挺直观并且挺好的，但是一旦存在多个异步编程，并且需要`顺序执行这些异步函数`，这就出现了传说中的 `Callback Hell`。

```js
foo1(
  res1 => {
    foo2(
      res1,
      res2 => {
        foo3(
          res2,
          res3 => {
            console.log(res3)
          },
          err => throw err
        )
      },
      err => throw err
    )
  },
  err => throw err
)
```

### Promise

Promise 最初出现的原因就是为了解决回调地狱的编码问题，修改后的代码如下：

```js
foo1()
  .then(res1 => foo2(res1))
  .then(res2 => foo3(res2))
  .then(res3 => {
    console.log(res3)
  })
  .catch(err => throw err)
```

### async/await

```js
async function bar() {
  try {
    let res1 = await foo1(),
      res2 = await foo2(res1),
      res3 = await foo3(res2)
    console.log(res3)
  } catch (err) {
    throw err
  }
}
```

### pipeline

#### promise + reduce

```js
;[func1, func2].reduce((p, f) => p.then(f), Promise.resolve())
```

等价于

```js
Promise.resolve()
  .then(func1)
  .then(func2)
```

如果想要通过给一个函数传递参数，自动按照顺序异步执行代码，那么可以通过下面的方式实现：

```js
function foo(...funcs) {
  return function(x) {
    return funcs.reduce((prev, func) => {
      prev.then(func)
    }, Promise.resolve(x))
  }
}
```

简化一下：

```js
let foo = (...funcs) => x =>
  funcs.reduce((prev, func) => prev.then(func), Promise.resolve(x))
```

使用的时候，就像这样：

```js
let pipeRun = foo(func1, func2, func3, func4)
pipeRun('start')
```

#### async/await

使用 async/await 实现 pipeline 就很简单：

```js
for (let func of [...funcs]) {
  await func()
}
```

### 错误处理的最佳实践

- 统一分类的错误字典（4xx: 客户端问题; 5xx: 服务器问题;）
- 同类错误的定义最好是可以扩展的（401; 402; 403...）
- 定义错误的严重程度（Fatal; Error; Warning; Info; Debug）
- 错误日志的输出最好使用错误码，而不是错误信息（比如 _http 404_，比较推荐输出 _PageNotFound_，而不是直接输出 404）
- 忽略错误最好有日志
- 对于同一个地方不停的报错，不要都打到日志里（淹没其他的日志），最好是记录错误出现的次数
- 不要用错误处理逻辑来处理业务逻辑，_catch_ 捕获的都应该是 _非预期的错误_，错误码则用来处理 _预期中的错误_
- 对于同类型的错误处理，用一样的模式
- 尽可能在错误发生的地方处理错误
- 向上尽可能的返回原始的错误
- 处理错误时，总要清理已分配的资源，`try-catch-finally`
- 不推荐在循环体中处理错误，应该是 `try-catch` 套循环，而不是循环套 `try-catch`
- 不要把大量的代码都放在一个 _try_ 语句中，一个 _try_ 应该只完成一个明确事情
- 使用 _Swagger_ 为你的错误定义提供清楚的文档以及每种错误的代码示例
- 对于异步的方式，推荐使用 _Promise_ 模式处理错误
- 对于分布式系统，推荐使用 _APM_ 相关软件跟踪错误
