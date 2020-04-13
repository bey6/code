module.exports = function Cat(mongoose) {
  // cat schema 大概理解为： cat 的结构吧
  let catSchema = mongoose.Schema({
    name: String
  })
  // 给 cat 结构添加方法 speack
  catSchema.methods.speak = function () {
    let greeting = this.name ? `Meow name is ${this.name}` : `I don't have a name`
    console.log(greeting)
  }

  // cat 差不多是一个表的意思
  return mongoose.model('Cat', catSchema)
}