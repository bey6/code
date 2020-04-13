# grunt

> 参考资料： https://www.gruntjs.net/getting-started

## 安装 grunt-cli

```
npm i -g grunt-cli
```

grunt-cli 的作用是调用与 `Gruntfile` 同目录的 `本地Grunt`，所以每个项目应该单独安装自己的 Grunt。

## new grunt project

一个 grunt 项目至少需要两个文件

1. **package.json**
   npm init 产出，存储项目的元数据，依赖等信息。
2. **Gruntfile**
   一般被命名为 `Gruntfile.js` 或 `Gruntfile.coffee`，分别为 JavaScript 文件与 CoffeeScript 文件。
   grunt 的配置文件，用来配置任务和其插件。

满足这两点要求的文件结构即可成为一个 grunt 项目

## 安装 grunt 和 grunt 插件

1. **安装 grunt**

```
npm i grunt --save-dev
```

命令执行结束后，`package.json` 文件会多出如下部分：

```
"devDependencies": {
  "grunt": "^1.0.4"
}
```

2. **安装 grunt 插件**

```
npm i grunt-contrib-jshint --save-dev
```

安装结束后，同样会修改 `package.json`，**devDependencies** 多出如下一行依赖 ：

```
"grunt-contrib-jshint": "^2.1.0"
```

## GruntFile

先给出官方的案例，先随便看一看：

```
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify']);

};
```

Gruntfile 文件由 4 部分组成：

1. wrapper 函数
2. 项目&任务配置
3. 加载插件&任务
4. 自定义任务

### 1. wrapper 函数

固定格式， grunt 代码必须在这个函数里面写：

```
module.exports = function(grunt) {
  // TODO...
}
```

### 2. 项目&任务配置

grunt.initConfig() 方法接收一个 object 对象，用来配置 grunt 项目。上面的案例中，initConfig 方法接收到一个包含有: `pkg` 与 `uglify` 两个属性的 object。

### 3. 加载插件&任务

```
grunt.loadNpmTasks('grunt-contrib-uglify');
```

grunt-contrib-uglify 属于常用任务(task)，因此已经被开发为一个 grunt 插件，所以这里的加载插件，实际上也是在加载任务。

### 4. 自定义任务

通过 `grunt.registerTask()` 方法，可以注册自己的任务。

```
grunt.registerTask('default', 'log some stuff.', function () {
  grunt.log.write('log...').ok();
})
```

也可以使用预设的任务或插件：

```
grunt.registerTask('default', ['uglify']);
```

default 参数指定了让 grunt 默认执行的任务。 `[]` 中可以写多个任务。

## grunt 一下

### 自定义 task

如果想要 grunt 一下看看效果的话，可以先这样修改一下配置文件：

```
module.exports = function(grunt) {
  grunt.registerTask('default', 'log some stuff', function() {
    grunt.log.write('logging...').ok();
  });
};
```

保存完毕后执行 `grunt` 查看效果。

### 官方 demo

如果想执行 demo 配置的话，需要两个前置条件：

1. 安装 grunt-contrib-uglify

```
npm i grunt-contrib-uglify --save-dev
```

2. 确保 src 目录下有一个与 package.json 中定义的 name 值相同的 js 文件。

例如我的 **package.json** 相关配置为： `"name": "01-grunt"`，那么我需要在 src/ 目录下 创建一个 `01-grunt.js` 文件。

现在可以执行 `grunt` 了。

```
$ grunt
Running "uglify:build" (uglify) task
>> 1 file created 66 B → 82 B

Done.
```

由于我的源文件很小，压缩时又添加了一些注释，因此更大了！ 2333

## 比较

源文件：

```
module.exports = function() {
  console.log('hello world');
};
```

压缩后：

```
/*! 01-grunt 2019-07-12 */

module.exports=function(){console.log("hello world")};
```
