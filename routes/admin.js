const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Product =require('./../models/product.js');
const passport=require('passport');
const multer = require("multer");
const cloudinary = require("cloudinary");
const Admin =require('./../models/admin.js');

cloudinary.config({
cloud_name: 'shyambhongle',
api_key: '366169741728964',
api_secret: 'DxBneDVi-N71kHLxOWjRvF6FTeI'
});

const upload= multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.match(/jpe|jpeg|png|gif$i/)) {
      cb(new Error('File is not supported'), false)
      return
    }
    cb(null, true)
  }
})



router.post('/addproduct',upload.single('img'),(req,res)=>{
  cloudinary.v2.uploader.upload(req.file.path,{folder:"products"},
  (error, result)=>
  {
    const newProduct = new Product({
      title: req.body.title,
      dprice:req.body.dprice,
      price:req.body.price,
      discount:((req.body.price-req.body.dprice)/req.body.price)*100,
      weight:req.body.weight,
      category:req.body.category,
      search:req.body.search,
      details:req.body.details,
      image:result.url,
      imageId:result.public_id
    })
    .save()
    .then(product =>{res.json({success:"done"})});
  })
});



router.post('/editproduct',upload.single('img'),(req,res)=>{
    Product.findOneAndUpdate(
      { "_id": req.body.id },
      { "$set": {
        "title": req.body.title,
        "dprice":req.body.dprice,
        "price":req.body.price,
        "discount":((req.body.price-req.body.dprice)/req.body.price)*100,
        "weight":req.body.weight,
        "category":req.body.category,
        "search":req.body.search,
        "details":req.body.details,
      }}).then(()=>{res.json({message:"success"})})
})



router.post('/editproducts',upload.single('img'),(req,res)=>{
  cloudinary.v2.uploader.destroy(req.body.imgid);
  cloudinary.v2.uploader.upload(req.file.path,{folder:"products"},
  (error, result)=>
  {
    Product.findOneAndUpdate(
      { "_id": req.body.id },
      { "$set": {
        "title": req.body.title,
        "dprice":req.body.dprice,
        "price":req.body.price,
        "discount":((req.body.price-req.body.dprice)/req.body.price)*100,
        "weight":req.body.weight,
        "category":req.body.category,
        "search":req.body.search,
        "details":req.body.details,
        "image":result.url,
        "imageId":result.public_id
      }}).then(()=>{res.json({message:"success"})})
  })
});

router.post('/deleteproduct',(req,res)=>{
  cloudinary.v2.uploader.destroy(req.body.imgid);
  Product.deleteOne({ "_id": req.body._id }).then(re=>{res.json({"message":"successful"})})
})

router.get('/getadmin',(req,res)=>{
  console.log("reached");
  Admin.findOne({"_id":"5d3955940201c73f5c5e65a3"})
        .then(admin=>{
          res.json(admin)
        })
})


module.exports=router;
