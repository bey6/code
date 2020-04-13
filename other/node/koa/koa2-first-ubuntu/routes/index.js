const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

// 直接将 body 修改为一个对象，就是返回了一个 json
router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/login', async (ctx, next) => {
  await ctx.render('login', {
    title: 'login'
  })
})

router.post('/login', async (ctx, next) => {
  const { username, password } = ctx.request.body;
  console.log(username, password);
  if (username === 'admin' && password === '1234') {
    await ctx.redirect('/users')
  } else {
    await ctx.render('error', {
      message: 'login error',
      error: {
        status: '400',
        stack: 'username or password error!'
      }
    })
  }
})

module.exports = router
