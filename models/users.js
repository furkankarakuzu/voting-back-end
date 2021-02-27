const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name:String,
  surname:String,
  email:String,
  password:String
})

module.exports = mongoose.model("User",userSchema)