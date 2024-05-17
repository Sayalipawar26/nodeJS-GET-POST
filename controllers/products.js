const product = require("../models/product")

const getAllProducts =async(req,res)=>{

  const {company}=req.query;
  const queryObject={};

  if(company){
    queryObject.company=company;
  }

  const products = await product.find(queryObject);
  console.log(req.query)
  res.status(200).json({products});
}

const getAllProductsTesting =async(req,res)=>{
    res.status(200).json({msg:"getAllProductsTesting method called"});
  }

  module.exports={getAllProducts,getAllProductsTesting}

  

