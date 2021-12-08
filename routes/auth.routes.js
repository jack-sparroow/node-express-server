const express = require("express")

const authController = require("./../controllers/auth.controller")

const authRouter = express.Router()

authRouter.route("/login").post(authController.login)

module.exports.authRouter = authRouter