const Company = require('../models/companies.js')
const getCompanies = async (req,res)=>{
  try {
    const companies = await Company.find()
    res.status(200).json(companies)
  } catch (error) {
    res.status(404).json({
      message:error.message
    })
  }
}

const createCompany = async (req,res)=>{
  const newCompany = new Company(req.body)
  try {
    await newCompany.save();
  } catch (error) {
    res.status(409).json({
      message:error.message
    })
  }
}


module.exports = {getCompanies, createCompany}