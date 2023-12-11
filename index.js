// load .env file contents to process.env by default
require('dotenv').config()
const express = require('express')
const cors= require('cors')
const router = require('./Routes/router')
require('./DB/connection')
// create an express application
const pfServer = express()

pfServer.use(cors())
pfServer.use(express.json())

pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))
const PORT = 4000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`Blog Server started at port: ${PORT} and waiting for client request`);
})
// http get request http://localhost:4000/
pfServer.get('/',(req,res)=>{
    res.send(`<h1>Blog server started and waiting for client request!</h1>`)
})

