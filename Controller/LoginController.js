const Login = require("../Models/Login");

async function getRecord(req,res){
   try {
    let data = await Login.find().sort({_id:-1})
    res.send({status:200,count:data.length,message:"Successfully Signed Up",data:data,result:"done",data:data})
   } catch (error) {
    
   }
}


async function createRecord(req,res){
    try {
        const data = new Login(req.body)
        await data.save()
        res.send({status:200,message:"Successfully Signed Up",data:data,result:"done"})
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createRecord:createRecord,
    getRecord:getRecord
}