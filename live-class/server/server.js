const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017")

app.listen(3001, () => {
    console.log("server is running")
})