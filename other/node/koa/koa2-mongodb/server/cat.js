const mongoose = require('mongoose')
const Cat = require('../schema/cat')
// try to connect mongodb
mongoose.connect('mongodb://localhost/test')

// 链接中的 db
const db = mongoose.connection;
// 监听 error
db.on('error', console.error.bind(console, 'connection error:'))
// 监听 open
db.once('open', function () {
  console.info('open success!')
})

const catDb = {
  add(obj) {
    // 实例化一个 Cat 表的对象
    let littleCat = new Cat(mongoose)(obj)
    // save this cat!
    littleCat.save((err, littleCat) => {
      if (err) return console.error(err)
      littleCat.speak()
    })
  },
  query(queryObj) {
    // find specific cat!
    Cat.find(queryObj, (err, kittens) => {
      if (err) return console.error(err)
      console.log('find it!');
    })
  }
}

module.exports = catDb