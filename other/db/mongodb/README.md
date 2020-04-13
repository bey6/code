# nodejs 与 mongodb

## 链接测试

首先保证 mongodb 是启动的状态，可以使用 `mongod` 命令。

> mongodb 默认端口是 27017

```js
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'test';

mdb.connect = MongoClient.connect(url, function(err, client) {
  const adminDb = client.db(dbName).admin();
  console.log('connect success!');
  client.close();
});
```
