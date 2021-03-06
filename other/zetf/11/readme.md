# 错误返回码和异常捕捉

## 传统的错误检查

- c 语言的错误码

  在函数错误时，返回状态码，有时候无法分清楚是正常值还是异常状态码；为此，后期通过添加一个 `全局错变量 errno` 来存放错误码，通过 `errno + 返回值` 一同判断异常。

- c++ 语言的 **R**esouce **A**cquisition **I**s **I**nitialization

  c++ 的 RAII 通过一个互斥锁来实现类似 finally 的效果（return 之后还会执行的代码），具体就是实现定义好一个要执行的语句，并通过互斥锁将其卡住，然后当程序中出现异常时，再将锁释放，这样就可以继续执行锁之后的内容了。这也侧面的解释了为什么 return 之后还会继续执行 finally 的原因吧。

- go 语言的多返回值

  go 语言在很多函数中，提供了两个返回值 -`(res, err)`，res 是函数正常时的返回结果，如果出现了错误，那么 `err != nil`，所以说在 go 语言中，将会出现大量的 `if err != nil {}` 的判断，当出现异常的时候，res 将会被忽略，defer 块的语句将会被执行。

## 错误处理

如果将错误分为 3 类：资源错误、程序错误、用户错误，那么对于三者应该有不同的处理方式。

- 资源错误

  资源错误往往是程序无法控制的，比如权限、内存、网络等。

- 程序错误

  空对象、空指针、非法参数等，这种错误属于程序自己的错误了，应该记录下来，写入日志，触发监控系统报警。

- 用户错误

  用户错误体更多的是在输入上，🌰 少了参数、格式不对等，对于此类错误，应该明确指出，并且抛出到客户端，帮助用户修正。同时也应该统计响应的错误率，这样有利于改善软件或是监测是否有恶意的用户请求。

总得来说：

- 不期望发生的事情，使用异常捕获
- 预料之中的事情，返回错误码

## Next

对于异步编程的错误捕获与同步编程会有不同。
