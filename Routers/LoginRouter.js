const { createRecord, getRecord } = require("../Controller/LoginController");

const LoginRouter = require("express").Router();
LoginRouter.get("/",getRecord)
LoginRouter.post("/",createRecord)


module.exports = LoginRouter