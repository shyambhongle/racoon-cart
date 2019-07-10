const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
  discount:{
    type:Number
  },
  image:{
    type:String
  },
  title:{
    type:String
  },
  weight:{
    type:String
  },
  price:{
    type:Number
  },
  dprice:{
    type:Number
  },
  qty:{
    type:Number,
    default:0
  },
  details:{
    type:String
  },
  category:{
    type:String
  },
  search:{
    type:String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Product = mongoose.model('product', ProductSchema);
