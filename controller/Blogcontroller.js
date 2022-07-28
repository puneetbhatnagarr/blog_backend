const blogModel = require('../models/Blog.js')
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
}

module.exports = Blogcontroller