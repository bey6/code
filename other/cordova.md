# web 应用发布

不同平台需要创建不同的软件包, 因此用户需要把所有的文件, 复制到不同的项目中, 然后创建不同的软件包.

如果把应用当做原生的应用来打包, 就可以调用一些本地的 API, 而不是仅仅只能使用 HTML5 的 API. 要打包应用到商店发布, 可以选择如下的方式:

- 为每个平台创建一个原生应用项目, 把 Web 应用的文件作为本地资源加入项目中, 用 Web View 组件绑定应用的 HTML 内容.
- 使用某个官方的 Web应用平台, 通常, 这会把项目压缩成一个 zip 压缩包.
- 使用原生应用编译器, 分别打包为各个平台的软件包(要求具有相关平台的编码基础)

发布一个项目需要明确想要发布到哪个平台, 一般需要在想要发布的平台首先创建一个应用发布账号.

不同的平台对发布的要求也不尽相同:

|商店|所有者|平台|文件格式|费用|地址|
|-|-|-|-|-|-|
|AppStore|Apple|IOS(iPhone、iPod、iPad)|ipa|$99/年|[AppStore](https://developer.apple.com/)|
|Android Market|Google|Android|apk|$20/次|[仿佛无法访问](#.)|
|AppWorld|RIM BlackBerry|Smartphones/PlayBook|cod/bar|免费|[AppWorld](http://developer.blackberry.com/)|

另外还有其他的厂商自己的应用商店, 比如[三星](http://support-cn.samsung.com/App/DeveloperChina/Home/Index)、[华为](https://developer.huawei.com/consumer/cn/)、[小米](https://dev.mi.com/console/)等等.

## Cordova

Cordova 提供将 HTML5 + JavaScript + CSS3 开发的程序代码包装成跨平台的APP, Cordova 包含了许多移动设备的 API 接口, 通过调用这些 API, 可以使用一些本地的 API.

Cordova 的前身是 PhoneGap, 后由 PhoneGap 捐献给 Apache 基金会, 改名为 Apache Cordova.

### 安装 Cordova

```bash
npm install -g cordova
```

### 创建一个项目

```bash
cordova create MyApp
```

### 添加平台

```bash
cordova platform add browser
```

### 运行 APP

```bash
cordova run browser
```

### 更多

[访问官网](https://cordova.apache.org/#getstarted)
