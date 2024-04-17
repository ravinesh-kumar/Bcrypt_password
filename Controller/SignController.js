const sign = require("../Models/Sign");
const bcrypt = require('bcrypt');
async function createSign(req,res){
    try {
        const data = new sign(req.body);
        bcrypt.hash(req.body.password,12,async(error,hash)=>{
            if(error){
                res.send({status:500,result:"failed",message:"Internal server error"})
            }
            else{
                data.password = hash
                await data.save()
                res.send({status:200,result:"done",message:"Account created successfully",data:data})
            }
        })
    } catch (error) {
        res.send({status:500,result:"failed",message:"Internal server error"})
    }
}

module.exports ={
    createSign:createSign
}