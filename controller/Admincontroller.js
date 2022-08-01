const adminModel = require('../models/Admin.js')

class Admincontroller{
    static admininsert = async(req,res)=>{
        console.log(req.body)
        try{
           res.setHeader('Access-Control-Allow-Origin','*');
           const admininsert = await adminModel.create(req.body);
           res.status(200).json({
            message:"Successfully Registered",
            success:true,
            admininsert 
           })
        }catch(err){
            console.log(err)
        }
    }

    static getadmin = async(req,res)=>{
        try{
           
            const admindata = await adminModel.find()
            res.status(200).json({
                message:"Successfully Registered",
                success:true,
                admindata
            })
            res.send(admindata)
        }catch(err){
            console.log(err)
        }
    }

    static adminview=async(req,res)=>{
        try{
            // res.header("Access-Control-Allow-Origin","*");
            const adminview= await adminModel.findById(req.params.id)
            res.status(200).json({
              
                success:true,
                adminview 
            })
        }catch(err){
            console.log(err)
        }
    }

       
}
module.exports =  Admincontroller