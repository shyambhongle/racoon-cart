const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const AdminSchema = new Schema({
    city:{
      Mumbai:{
        type:Number,
        default:0
      },
      Pune:{
        type:Number,
        default:0
      },
      Banglore:{
        type:Number,
        default:0
      }
    },
    top:{
      type:Array,
    },
    Orders:{
      type:Number,
      default:0
    },
});

module.exports = Admin = mongoose.model('admin', AdminSchema);
