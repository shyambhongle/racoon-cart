const express = require('express');
const router = express.Router();
const Product = require('./../models/product');
const mongoose= require('mongoose');






router.post('/',(req,res)=>{
  Product.find()
      .then(products=>{
        let newList=[];
        let test=products.map(product=>{
          let x= product.search.includes(req.body.words.toLowerCase());
          return x?newList.push(product):null
        })
        Promise.all(test).then((completed)=>{
      return res.json(newList)
        })
      })
})







module.exports=router;
