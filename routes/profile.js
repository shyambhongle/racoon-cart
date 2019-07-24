const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const User =require('./../models/user.js');
const passport=require('passport');




router.post('/addcart',passport.authenticate('jwt',{session:false}),(req,res)=>{
  console.log("recahed");
  User.findOneAndUpdate(
    {_id:req.user._id},
    {$set:{cart:req.body.cart}},
    {$new:true}
  ).exec().then(cart=>{
    console.log("r,",cart);
    return res.json(cart)
  })
})



module.exports=router;
