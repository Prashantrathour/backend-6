const express=require("express")
const connection = require("./db")


const cors=require("cors")
const boardRouter = require("./router/boardtask")

require('dotenv').config()
const app=express()
app.use(cors())
app.use(express.json())
app.use("/board",boardRouter)


app.listen(process.env.PORT,async(req,res)=>{
    try {
        await connection
        console.log(`server listening on port ${process.env.PORT} and connected to database`)
    } catch (error) {
       console.log(error) 
    }
})