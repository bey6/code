const express = require('express'); // 引入 express
const app = express(); // 创建一个 express 应用

console.log(__dirname);

// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/home', (req, res) =>
  res.sendFile(`${__dirname}\\index.html`)
);
app.listen(3000, () =>
  console.log('application is running ai http://localhost:3000')
);
