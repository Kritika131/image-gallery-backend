import mongoose from "mongoose"

const mongoose_uri = 'mongodb+srv://admin:admin-123@cluster0.92xqvur.mongodb.net/?retryWrites=true&w=majority'

const dbConnect = async ()=>{
  try{   
    await mongoose.connect(mongoose_uri) 
    console.log("db connected");    
 
  } catch(err){
    console.log("error while connecting to database");
  }
}

export default dbConnect

