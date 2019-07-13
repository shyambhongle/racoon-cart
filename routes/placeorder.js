const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const User =require('./../models/user.js');
const passport=require('passport');


router.post('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
  console.log(req.body);
  User.findOneAndUpdate(
    {_id:req.user._id},
    {$push:{orders:req.body.details}},
    {new:true}
  ).then(data=>{
    res.json(data);
  })
})







module.exports=router;
