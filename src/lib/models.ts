import mongoose from "mongoose";

const productSchema =new mongoose.Schema({
    name : {
        type : String,
        required : true,
        min : 5,
        max:50,
    }, 
    price :{
        type:Number,
        required :true,
        min : 1,
    },
    description :{
        type:String,
        required:true,

    },
    image :{
        type :String,
        required :true
    }, 
    slug:{
        type:String,
        required:true,
        unique: true
    } ,
    
}, {timestamps :true})

export const Product =mongoose.models.Product || mongoose.model('Product', productSchema)