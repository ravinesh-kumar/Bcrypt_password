const LoginRouter = require("./LoginRouter")
const SignRouter = require("./SignRouter")

const router = require("express").Router()

router.use("/logindata",LoginRouter)
router.use("/sign",SignRouter)

module.exports = router