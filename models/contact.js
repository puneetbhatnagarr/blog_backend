const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true},
    message:{type:String,required: true}

},
{timestamps:true});

var contactModel = mongoose.model('contact',newSchema);
module.exports=contactModel;

