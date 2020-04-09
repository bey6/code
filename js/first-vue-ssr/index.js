const app = require('express')()
const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <h1>你好世界！</h1>
    </body>
    </html>
  `)
})

app.get('/vue', (req, res) => {

  const app = new Vue({
    data: {
      content: 'Hello Vue'
    },
    template: `
    <h1>{{content}}</h1>
    `
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })
})

app.listen(3000);
console.info('application is running at: http://localhost:3000');