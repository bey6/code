# vue 部署 docker

本偏适合入门，结束后可以在指定端口访问 vue 项目

另外附：[github+jenkins+docker 自动化部署 vue 项目](https://www.cnblogs.com/imstrive/p/10867943.html) 通过 github hook trigger 与 .sh 文件　定期打包 vue 项目，实现自动化部署。

## 1. build vue

```bash
npm run build
```

默认会生成一个 ./dist folder.

最后的目录结构应该是这样的

```bash
.
├── dist
├── dockerfile
└── nginx.conf
```

## 2. edit dockerfile

[dockerfile](./dockerfile)

```dockerfile
FROM nginx
RUN mkdir /app
COPY ./dist /app
COPY nginx.conf /etc/nginx/nginx.conf
```

[nginx.conf](./nginx.conf)

## 3. generate image

`.` 表示当前目录

`-t` 后面跟镜像名称

```bash
docker build . -t first-docker-vue
```

linux os use:

```bash
sudo docker build . -t first-docker-vue
```

## 4. run container

run the container from the first-docker-vue image.

`-d` 意思是后台运行容器

`-p` 8080:8080 `:`左边表示映射到宿主机的端口，右边表示 docker 内部应用指定的端口

```bash
docker run -d -p 8080:8080 first-docker-vue
```

linux os use:

```bash
sudo docker run -d -p 8080:8080 first-docker-vue
```

## 5. visit

visit http://localhost:8080 to make sure if success.
