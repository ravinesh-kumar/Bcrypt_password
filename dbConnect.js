const mongoose = require("mongoose")

async function getconnect(){
        await mongoose.connect("mongodb://127.0.0.1:27017/Ravinesh")
        console.log("database is connect ");
   
}

getconnect()