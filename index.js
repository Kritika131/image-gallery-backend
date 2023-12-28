import express from "express"
import cors from "cors"
import router from "./routes/route.js";
import { connect } from "mongoose";
import dbConnect from "./database/db.js";
import { config } from "dotenv";

config()

const app = express(); 
const port = process.env.PORT || 5005

//middleware
app.use(cors())
app.use(express.json())
app.use("/api",router) 
 
 
app.get('/',(req,res)=>{
  res.send("<h2>hello</h2>") 
})    

//db connection

dbConnect().then(()=>{
  try{
    app.listen(port,()=>{
      console.log("app running on 8080");
    })
  } catch(err){
    console.log("cann't connect to the server")
  }
})
.catch((err)=>{                                                        
  console.log("Invalid Database connection");
})

