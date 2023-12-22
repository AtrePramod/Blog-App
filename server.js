const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv')

//dotenv config
dotenv.config() //dotenv file are in root otherwise to dotenv.config({path:'file_path'})

//rest object
const app = express()

//middelwares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


//routes
app.get("/", (req, res) => {
    res.status(200).send({
        "message": "NODE SERVER"
    })
})

//port 
const PORT = process.env.PORT || 8080
//listen
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} port no ${PORT}`.bgCyan.white)
})