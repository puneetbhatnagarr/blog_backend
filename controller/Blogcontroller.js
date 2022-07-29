const blogModel = require('../models/Blog.js')
const contactModel = require('../models/contact.js')
class Blogcontroller{
    static getall = async(req,res)=>{
        try{
            res.header("Access-Control-Allow-Origin","*")
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
        console.log(req.body)
        try{
            const {title,description,body}=req.body

            const getall = new blogModel({
                title:title,
                description:description,
                body:body
            })

            const data = await getall.save()
            res.send(data)
        }catch(err){
            console.log(err)
        }
    }

    static blogview=async(req,res)=>{
        try{
            res.header("Access-Control-Allow-Origin","*");
            const result= await blogModel.findById(req.params.id)
            res.status(200).json({
                // message:"IT IS RUNNING ",
                success:true,
                result 
            })
        }catch(err){
            console.log(err)
        }
    }

    static contactinsert = async(req,res)=>{
        console.log(req.body)
        try{
           const contactinsert = await contactModel.create(req.body)
           res.status(200).json({
            // message:"IT IS RUNNING ",
            success:true,
            contactinsert 
           })
        }catch(err){
            console.log(err)
        }
    }

    static getcontact = async(req,res)=>{
        try{
            res.header("Access-Control-Allow-Origin","*")
            const contactall = await contactModel.find()
            res.status(200).json({
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