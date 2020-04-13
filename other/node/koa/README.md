# koa

[koa 中文](https://koa.bootcss.com/#)
[koa-generator](https://github.com/ykfe/koa-generator)

## 简介

koa 是一个新的 web 框架， 由 express 原班人马打造，支持了 async 函数。

## 安装 koa

该方式一般用于测试使用，正式的项目搭建常选择用 skeleton。

```
npm i koa
```

## 安装骨架(skeleton)生成器

```
npm install -g koa-generator
```

## 创建一个应用

```
koa2 first-koa
```

输出

```bash
bei@bei-pc:~/Code/JavaScript/guide/01-javascript/node/koa$ koa2 koa2-first

   create : koa2-first
   create : koa2-first/package.json
   create : koa2-first/app.js
   create : koa2-first/public
   create : koa2-first/public/javascripts
   create : koa2-first/public/images
   create : koa2-first/public/stylesheets
   create : koa2-first/public/stylesheets/style.css
   create : koa2-first/routes
   create : koa2-first/routes/index.js
   create : koa2-first/routes/users.js
   create : koa2-first/views
   create : koa2-first/views/index.pug
   create : koa2-first/views/layout.pug
   create : koa2-first/views/error.pug
   create : koa2-first/bin
   create : koa2-first/bin/www

   install dependencies:
     $ cd koa2-first && npm install

   run the app:
     $ DEBUG=koa2-first:* npm start
```

## 安装依赖&执行

```
npm i
```

```
npm start
```

看到这里就表示成功执行了 koa 应用，访问 http://localhost:3000 即可查看。

```bash
bei@bei-pc:~/Code/JavaScript/guide/01-javascript/node/koa/first-koa$ npm start

> first-koa@0.1.0 start /home/bei/Code/JavaScript/guide/01-javascript/node/koa/first-koa
> node bin/www
```
