const express = require("express");

const router = express.Router();

const Product2 = require("../models/product2.model");
const Product = require("../models/product.model")//running

// router.post('/product',async(req,res)=>{
//   var user = 
// })
router.get("/products1" , async (req , res ) => {
  try{ 
    const products = await Product.find().lean().exec();
    // console.log(products)
    return res.status(200).json(products);
  }catch(e){
    return res.status(500).json({message: e.message});
  }
      
   });

   router.get("/products" , async (req , res ) => {
    try{ 
      
      const product = await Product2.find().lean().exec();
      console.log( product );
      return res.status(200).json(product);
    }catch(e){
      console.log('abhishek 111')
      return res.status(500).json({message: e.message});
    }
  });


 module.exports = router;