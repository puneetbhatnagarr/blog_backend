const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    body:{type:String,required: true},
   
},
{timestamps:true});

var blogModel = mongoose.model('blog',newSchema);
module.exports=blogModel;

