const router = require('koa-router')()
const catDb = require('../server/cat')

router.prefix('/cats')

router.get('/add', async (ctx, next) => {
  console.log(ctx.body.name);
  const res = await catDb.add({ name: ctx.body.name })
  ctx.body = res;
})

router.get('/list', async (ctx, next) => {
  const res = await catDb.query({});
  console.log(res);
  ctx.body = 'success'
})

module.exports = router
