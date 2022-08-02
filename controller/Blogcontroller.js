const blogModel = require('../models/Blog.js')
const contactModel = require('../models/contact.js')
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
        console.log(req.body)
        try{
            res.setHeader('Access-Control-Allow-Origin','*');
            const insertblog = await blogModel.create(req.body);
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
    static blogedit = async(req,res)=>{
        // console.log(req.params.id)
        try{
            const {_id} = req.user
            const result = await blogModel.findOne({user_id:_id})
            console.log();
            res.render('course/edit',{data1:result});
        
        }catch(error){
            //console.log(error);
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