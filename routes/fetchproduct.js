const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Product =require('./../models/product.js');




router.get('/',(req,res)=>{
  Product.find({category:{ $in: ['trending', 'bestSelling'] }})
          .exec()
          .then(products=>{res.json({allProducts:products})})
})




module.exports=router;
