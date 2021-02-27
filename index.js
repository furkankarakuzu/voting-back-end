const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

const companyRoutes = require('./routes/companies.js')

const usersRoutes = require('./routes/users.js')

const app = express();
dotenv.config()


app.use(bodyParser.json({ limit : '30mb', extended : true}))
app.use(bodyParser.urlencoded({ limit : '30mb', extended : true}))
app.use(cors());

app.get('/',(req,res)=>{
  res.json({
    author:'Furkan Karakuzu',
    message:'Hello from mongoose!'
  })
})

app.use("/companies", companyRoutes)
app.use("/users",usersRoutes)

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser:true,
  useUnifiedTopology:true
})
.then(()=>{
  app.listen(PORT,()=>{
    console.log(`Server ${PORT} portunda calisiyor`)
  })
})
.catch(error=>{
  console.error(error.message)
})