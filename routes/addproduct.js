const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Product =require('./../models/product.js');




router.get('/',(req,res)=>{
  let newProduct=new Product({
    discount:10,
    image:"",
    title:"rice",
    weight:"10kg",
    price:300,
    dprice:200,
    details:"Good rice",
    category:"trending",
    search:"rice"
  }).save().then(()=>{res.json({"message":"success"})})
})




module.exports=router;
