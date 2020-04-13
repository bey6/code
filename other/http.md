# HTTP

## HTTP 报文结构

```text
行 + 头 + 空行 + 体
```

### 行

- 请求行
  `method uri version`
  🌰: `GET /home/id=21 HTTP/1.1`
- 响应行
  `version status-code reason`
  🌰: `HTTP/1.1 200 ok`

### 头

*行*单独属于一行，*头*在*行*的另起一行紧跟着，有的时候也经常把*行与头*合起来叫*头*。

头一般都是 `field-name: field-value` 的形式，头一般很多所以`头 + 行`的一般样子如下：

```js
行
fieldName1: fieldValue
fieldName2: fieldValue
filedName3: fieldValue
... N 个
fieldNameN: fieldValue
空行
```

行与空行之间的都属于头。

### 体

头与体用空行来分割，所以说空行不可随便+，否则会引起体的错误读取。

## HTTP METHODS

- **GET**: 获取
- **HEAD**: 获取元信息
- **POST**: 提交
- **PUT**: 修改
- **DELETE**: 删除
- **CONNECT**: 建立连接，用于代理服务器
- **OPTIONS**: 预请求，服务器返回允许的方法
- **TRACE**: 追踪请求-响应的传输路径

### GET 与 POST 区别

- **缓存**，GET 会被浏览器主动缓存留痕
- **编码**，GET 只能 URL 编码，只能接收 ASCII 字符
- **参数**，GET url，POST body
- **幂等性**，GET 幂等（执行相同的操作，结果也是相同的）
- **TCP**，GET 请求报文一次性发出，POST 分两次，先发 header，服务器响应 100 在发 body。（火狐只发一次）

## URI

*Uniform Resource Identifier* *统一资源标识符*，它包含两部分：`Uniform Resource Names` 与 `Uniform Resource Locators`。

### URI 的结构

```text
scheme :// user:passwd@ host:port path ?query #fragment
```

- **scheme**: 协议，🌰 `http`、`mailto`、`file` 后面必须跟 `://`
- **user:passwd@**: 登录主机的用户名密码（极少用）
- **host:port**: 主机名 + 端口
- **path**: 路径
- **?query**: 查询参数
- **#fragment**: 锚点

### URI 编码

URI 只支持 ASCII 编码，非 ASCII 字符会在前面加 `%` 进行十六进制转义，🌰 `%A3%B4`。

## HTTP STATUS CODE

- **1x**: 中间码，还有后续操作
- **2x**: 成功
- **3x**: 重定向
- **4x**: 报文有误
- **5x**: Server Error

## HTTP 特点

- 无状态
- 灵活
- 继承 TCP/IP 特点：握手、可靠
- 明文传输
- 长连接队头阻塞

## Accept & Content

### Type

对于接收端来说，*Accept* 表示希望接收的数据类型，对于发送端来说，*Content-Type* 表示自己发送的数据类型。

数据类型的取值为 **M**ultipurpose **I**nternet **M**ail **E**xtensions(MIME) Type 的数据类型。

它包括 4 中大类：`text`、`image`、`audio/video`、`application`。

### Encoding

*Accept-Encoding* & *Content-Encoding*，取值有：`gzip`、`deflate`、`br`。

### Charset

*Accept-Charset* & *Content-Type*，一般写法为：`Accept-Charset: charset=utf-8`、`Content-Type: text/html;charset=utf-8`。

### Language

*Accept-Language* & *Content-Language*，取值有：`zh-CN`、`en`。

## 定长和不定长的数据如何传输

### 定长

定长包体的传输在请求头中会带有 *Content-Length* 字段，来表示包体长度，如果长度表示有误，则接收就会出现异常。

### 不定长

不定长包体的请求头会带有 *Transfer-Encoding: chunked* 字段，表示传输分块。

带有 *Transfer-Encoding: chunked* 字段的连接会自动产生两个效果：

- 无论 *Content-Length* 字段
- 变为长链接

## 大文件传输

添加响应头 *Accept-Ranges: none* 支持*范围请求*。

*Content-Range: bytes 0-9/100* 表示当前返回的是 0-9 段，一共 100.

多段数据时关键字段 *Content-Type: multipart/byteranges; boundary=00000010101*，表示是一个多段数据请求，分隔符是 00000010101。

## URL & form-body

- *Content-Type: application/x-www-form-urlencoded* URL 传参
- *Content-Type: multipart/form-data* body 传参

## HTTP1.1 队头阻塞

对头阻塞问题主要是长连接场景，只要有一个请求处理过慢，队列中的所有任务都会跟着等待。

解决对头阻塞问题的办法：

- 增加长连接的数量
- 域名分片，每个子域名能够得到自己的长连接个数（chrome 对于一个域名会允许最多并行6个长连接）

## Cookie

由于 http 的无状态性，有时候相遇保留一些状态信息就需要用到 Cookie 了，Cookie 本质上就是一个 `k: v` 的文本文件。

在向同一个域名发送请求时，会携带相同的 Cookie 发送给服务器，服务器拿到 Cookie 后解析便拿到了客户端的状态。

### 设置 Cookie

服务端使用 `Set-Cookie` 字段来对客户端写入 Cookie。

```js
// Response header
Set-Cookie: a=xxx
Set-Cookie: b=yyy
```

### 过期

- **Expires**: 过期时间
- **Max-Age**: 保存几秒

Cookie 过期后会自动删除

### 作用域

只有符合域名和路径设置的请求才会携带 Cookie，

- **Domain**: 域名
- **Path**: 路径，设置 `/` 则作用域全域名

### 安全

- **Secure**: HTTPS only
- **httpOnly**: http only，不能通过 js 访问
- **SameSite**:
  - *Strict* 仅本站点请求允许携带 Cookie
  - *Lax* 来自其他站点的跳转仅 `get` 或 `a 标签 get` 允许携带 Cookie
  - *None* 不限制

### Cookie 缺点

- 4KB
- 如果不设置 `Path` 则每次请求都会带着 Cookie，无论是否需要
- 不安全

## HTTP Proxy

### 目的

- **负载均衡**: 代理服务器计算请求应该发送给哪个服务器
- **安全**: 检测服务器的健康状况，拉黑恶意 ip
- **缓存**: 某些内容缓存到代理，由代理直接返回

### 相关 http headers

- **Via**: 请求的顺序 / 响应的顺序，🌰 Request: `Via: proxy_server1, proxy_server2`; Response: `Via: proxy_server2, proxy_server1`
- **X-Forwarded-For**: `转发自`，也就是*当前*请求人是谁，每次到一个新的代理服务器都会更新该字段
  https 中，原始的报文是不允许修改的，所以无法修改该字段，由此产生了代理协议，一般使用明文版本，只需要在 http 请求行上面在加上这样一行：

  ```bash
  # PROXY TCP4/TCP6 请求IP 接收IP 请求端口 接收端口
  PROXY TCP4 0.0.0.1 0.0.0.2 8080 8081
  GET / HTTP/1.1
  ```

- **X-Real-IP**: 最初请求的 ip，不会因为代理服务器而更改。

## HTTP 缓存及缓存代理

### 缓存

缓存有*强缓存*和*协商缓存*，浏览器通过*Cache-Control*验证强缓存是否可用，如果可用则直接使用。

否则进入协商缓存，即发送 http 请求，服务器通过请求头中的 **If-Modified-Since** 或者 **If-None-Match** 这些字段检查资源是否更新。

如果更新，则响应 200，返回资源；否则，响应 304，告知直接从缓存拿。

### 代理缓存

一些缓存数据库的服务器（🌰 Redis、Memacahe）也是有缓存的。为了减轻这些源服务器的压力，才出现了代理缓存。

代理缓存允许代理服务器接管一部分的服务器端 http 缓存，客户端缓存过期后，就近到代理缓存中获取，代理缓存过期后才请求源服务器。

### 代理缓存的使用方式

代理缓存的控制分为两个部分：

- 源服务器端的控制
- 客户端的控制

### 1. 源服务器的控制

`Cache-Control` 字段用来控制缓存，在其中添加如下这些字段进行缓存控制。

- private 和 public
  `public` 表允许代理服务器缓存，否则为不允许
- proxy-revalidate
  `must-revalidate` 的意思是客户端缓存过期就去源服务器获取，而 `proxy-revalidate` 表示代理缓存服务器的缓存过期后到源服务器获取。
- s-maxage
  `s-maxage` 是限制*代理缓存服务器*的缓存存放时间，`max-age` 是*客户端*缓存存放时间。

### 2. 客户端的控制

同样是在 `Cache-Control` 字段中设置。

- max-stale 和 min-fresh
  max-stale 表示过期后宽限 n 秒，这期间也认为缓存可用；min-fresh 表示缓存要足够新鲜，当还有 n 秒就要到期时就去获取。
- only-if-cached
  表示客户端仅从代理缓存服务器拿东西。

## 跨域

如果要访问目标的 `协议+IP+端口` 与本站点不是完全相同的话，那么本次请求就是跨域了。

浏览器遵循同源策略，只有满足上述条件的才属于同源，不同源站点之间会有一些限制：

- 不可读写对方 DOM
- 不可读写对方 Cookie、IndexDB、LocalStorage
- 限制 XMLHttpRequest 请求

跨域请求不成功，实际上是浏览器进行拦截的，正常情况下请求本身是成功响应了的，浏览器在接收端服务器端发送回来的响应信息后，判断是否允许了该站点的跨域访问，如果条件判断不成功，则直接扔掉了影响体，并抛出错误。

具体如下：

- JavaScript 代码在渲染进程中发起 *xhr* 请求，并且通过 ipc 交给浏览器进程统一调度
- 浏览器进程将请求交给网络进程去执行
- 网络进程执行后将结果返回给浏览器主进程
- 浏览器主进程检查是否满足跨域访问的条件，满足则将结果交给渲染进程，否则会扔掉请求体，拦截掉该结果

