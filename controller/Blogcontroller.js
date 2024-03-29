const blogModel = require('../models/Blog.js')
const contactModel = require('../models/contact.js')
var cloudinary = require('cloudinary').v2;
class Blogcontroller{
    static getall = async(req,res)=>{
        try{
           
            res.setHeader("Access-Control-Allow-Origin","*")
           
            const getall = await blogModel.find()
            res.status(200).json({
                success:true,
                getall
            })
            res.send(getall)
        }catch(err){
            console.log(err);
        }
    }

    static bloginsert = async(req,res)=>{
       
        try{
            res.setHeader('Access-Control-Allow-Origin','*');
            const file = req.files.pimages;
            console.log(file)
            const myimage = await cloudinary.uploader.upload(file.tempFilePath,{
              folder:'user_profile',
              width:150,
            })
            console.log(myimage)
            const insertblog = await blogModel.create(req.body);
            console.log(req.body)
            res.status(200).json({
             message:"Successfully Registered",
             success:true,
             insertblog 
            })
         }catch(err){
             console.log(err)
         }
    }

    static blogview=async(req,res)=>{
        try{
            // res.header("Access-Control-Allow-Origin","*");
            const viewresult = await blogModel.findById(req.params.id)
            res.status(200).json({
                // message:"IT IS RUNNING ",
                success:true,
                viewresult 
            })
        }catch(err){
            console.log(err)
        }
    }


    static updateblogs = async(req,res)=>{
        try{
            res.setHeader('Access-Control-Allow-Origin','*');
            const updatedata = await blogModel.findByIdAndUpdate(req.params.id,req.body);
            if(!updatedata){
                return res.status(500).json({
                    success:false,
                    message:"product not found"
                })
            }
            res.status(200).json({
                // message:"ROuting is working fine"
                success:true,
                updatedata
              })
            res.send(updatedata)
        }catch(err){
            console.log(err)
        }
    }

    static blogdelete=async(req,res)=>{
        try{
             res.header("Access-Control-Allow-Origin","*");
            const deleteresult = await blogModel.findByIdAndDelete(req.params.id)
            res.status(200).json({
                // message:"IT IS RUNNING ",
                success:true,
                deleteresult
            })
        }catch(err){
            console.log(err)
        }
    }

    // contact area...
    static contactinsert = async(req,res)=>{
        console.log(req.body)
        try{
           res.setHeader('Access-Control-Allow-Origin','*');
           const insertcontact = await contactModel.create(req.body);
           res.status(200).json({
            message:"Successfully Registered",
            success:true,
            insertcontact 
           })
        }catch(err){
            console.log(err)
        }
    }

    static getcontact = async(req,res)=>{
        try{
           
            const contactall = await contactModel.find()
            res.status(200).json({
                message:"Successfully Registered",
                success:true,
                contactall
            })
            res.send(contactall)
        }catch(err){
            console.log(err);
        }
    }

}

module.exports = Blogcontroller