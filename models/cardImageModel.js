import mongoose from "mongoose"

const imageScheme =new mongoose.Schema({
  author :{ type:String},
  height:{type:Number},
  width:{type:Number},
  url:{type:String},
  download_url:{type:String}


})

export default mongoose.model('cardImage',imageScheme)