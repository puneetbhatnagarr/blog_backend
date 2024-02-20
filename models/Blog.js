const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    body:{type:String,required: true},
    pimages: [
        {
          public_id: { type: String },
          url: { type: String  },
        },
      ],
   
},
{timestamps:true});

var blogModel = mongoose.model('blog',newSchema);
module.exports=blogModel;

