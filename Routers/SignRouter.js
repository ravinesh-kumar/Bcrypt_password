const { createSign } = require("../Controller/SignController")

const SignRouter = require("express").Router()

SignRouter.post("/",createSign)



module.exports = SignRouter