const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Admin =require('./../models/admin.js');
const User =require('./../models/user.js');
const passport=require('passport');
const stripe = require("stripe")("sk_test_rX54it3bevDhJ638D7jiFMI8");




const stripeChargeCallback = (res,req) => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    User.findOneAndUpdate(
      {_id:req.user._id},
      {$push:{orders:req.body.details}},
      {new:true}
    ).then(data=>{
      res.status(200).send({ success: stripeRes,update:data});
      console.log(req.body.details.city);
      Admin.find().then(datas=>{
       var newcart={
         ...datas[0].city,
       }
       newcart[req.body.details.city]+=1;
        Admin.findOneAndUpdate(
          {_id:datas[0]._id},
          {
          $set:{city:newcart},
          $inc:{Orders:1}
          },
          {$new:true}
        ).exec().then(newdata=>{console.log(newdata)})
      })
    })
  }
};



router.post('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };
  stripe.charges.create(body, stripeChargeCallback(res,req));
});



module.exports=router;
