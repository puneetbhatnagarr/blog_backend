const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
   

    role:{type:String,default:'user'},
    createdAt: { type: Date, default: Date.now },
});


var userModel = mongoose.model("User", userSchema);
module.exports = userModel;
