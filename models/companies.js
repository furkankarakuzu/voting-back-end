const mongoose = require('mongoose')

const companySchema = mongoose.Schema({
  isim:String,
  sehir:String,
  oy_1:String,
  oy_2:String,
  oy_3:String,
  oy_4:String,
  oy_5:String
})

module.exports = mongoose.model("Company",companySchema)