const express = require("express")

const morgan = require("morgan")

require("dotenv").config()

const router = require("./routes").mainRouter

const app = express()

const PORT = process.env.PORT

app.use(express.json())

app.use(morgan('dev'))

app.use("/v1", router)

app.listen(PORT, () => console.log(`Server is listening at ${PORT}`))