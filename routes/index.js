const express = require("express")

const mainRouter = express.Router()

const authRouter = require("./auth.routes").authRouter


mainRouter.use("/auth", authRouter)


module.exports.mainRouter = mainRouter