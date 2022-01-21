const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({


    pid: {type:Number , required:true},
    img_src:{type:String , required:true},
    name: {type:String , required:true},
    brand:{type:String , required:true},
    category:{type:String , required:true},
    price_now: {type:Number , required:true},
    price_was: {type:Number , required:true},
    strikedoffprice:{type:Number , required:true},
    Symbol: {type:String , required:true}

},
{
versionKey:false,
timestamps:true
});

module.exports = mongoose.model("product" , productSchema);
// module.exports= mongoose.model("products2",productSchema);