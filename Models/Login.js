const mongoose = require("mongoose")


const loginSchema  = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide your name"]
    }
})

const Login = new mongoose.model( "Login",loginSchema)
module.exports=Login;