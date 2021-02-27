const express = require('express')
const Companies = require('../models/companies')
const {getCompanies, createCompany} = require('../controllers/companies.js')
const router = express.Router()

router.get("/", getCompanies)
router.post("/", createCompany)
router.post('/search', async (req,res)=>{
  try {
    const company = await Companies.findOne({isim : req.body.isim})
    res.json({company})
  } catch (error) {
    res.status(400).json({message:error})
  }
});

module.exports = router