const express = require("express")
const router = require("./Routers/RootRouter")

const app = express()
app.use(express.json())
require("./dbConnect")
app.use("/api",router)

app.listen(8000,()=>{
    console.log("server running on port number http://localhost:8000")
})