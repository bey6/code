const router = require('koa-router')()
const mgdb = require('../db/db')

router.prefix('/users')

router.get('/', async (ctx, next) => {
  await ctx.render('users/index', {
    user: {
      name: 'admin'
    }
  })
})

router.get('/bar', async (ctx, next) => {
  ctx.body = 'this is a users/bar response'
})

router.get('/add', async (ctx, next) => {
  try {
    await mgdb.insert('mongodb://localhost:27017', 'testDb', 'c_student', {
      name: '小明',
      gender: '男',
      age: 10
    })
    await ctx.body({
      code: 200,
      message: 'insert success!'
    })
  } catch (error) {

  }
})

router.get('/list', async (ctx, next) => {
  const res = await mgdb.find('mongodb://localhost:27017', 'testDb', 'c_student', {})
  console.log(res);
  await ctx.render('users/list', {
    users: res
  })
})

module.exports = router
