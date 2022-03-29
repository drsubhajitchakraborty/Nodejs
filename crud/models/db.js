const mongoose=require('mongoose');


const dbschema=new mongoose.Schema(
{
    name: {
        type:String,
        required:true
    },

    address: {
        type:String,
        required:false
    },

    city: {
        type:String,
        required:true
    },

    number: {
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('db',dbschema)