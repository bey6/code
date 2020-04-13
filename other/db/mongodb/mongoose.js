const mongoose = require('mongoose')

// try to connect mongodb
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })

// 链接中的 db
const db = mongoose.connection;
// 监听 error
db.on('error', console.error.bind(console, 'connection error:'))
// 监听 open
db.once('open', function () {
  console.info('open success!')
})

// kitty schema 大概理解为： kitty 的结构吧
let kittySchema = mongoose.Schema({
  name: String
})
// 给 kitty 结构添加方法 speack
kittySchema.methods.speak = function () {
  let greeting = this.name ? `Meow name is ${this.name}` : `I don't have a name`
  console.log(greeting);
}

// Kitten 差不多是一个表的意思
let Kitten = mongoose.model('Kitten', kittySchema)

// 实例化一个 Kitten 表的对象
let felyne = new Kitten({ name: 'Felyne' })
felyne.speak()


// save this cat!
felyne.save(function (err, felyne) {
  if (err) return console.error(err)
  felyne.speak()
})

// find all cats!
Kitten.find(function (err, kittens) {
  if (err) return console.error(err)
  console.log(kittens);
})

// find specific cat!
// Kitten.find({ name: /^fluff/ }, function(err, kittens) {
//   if (err) return console.error(err)
//   console.log('find it!');
// })