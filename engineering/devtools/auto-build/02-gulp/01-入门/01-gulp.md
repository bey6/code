# gulp 入门

## 安装 gulp

全局安装与本地安装都需要安装

1. 全局安装

```
npm i gulp -g
```

2. 本地安装

```powershell
npm i gulp --save-dev
```

## gulpfile.js

gulpfile.js 文件是必须的，这是一个非常简单的任务，他输出了一个文本，之后任务就结束了。

不过他也却是能尝试执行 gulp。

gulpfile.js

```javascript
const gulp = require('gulp');

gulp.task('default', function() {
  console.log('running default task.');
  return Promise.resolve();
});
```

## 执行

```
gulp
```

## 结果

```javascript
bei@bei-pc:~/Code/JavaScript/laboratory/有计划的实践/03-gulp$ gulp
[22:41:36] Using gulpfile ~/Code/JavaScript/laboratory/有计划的实践/03-gulp/gulpfile.js
[22:41:36] Starting 'default'...
running default task.
[22:41:36] Finished 'default' after 5.36 ms
```
