import model from "../models/cardImageModel.js"

export const getImageData = async(req,res)=>{
  try{
            
      const response = await model.find({})
      if(response){
        res.status(200).json({status:"success",res:response})
      }
  } catch(err){
    res.status(400).json({status:"failed",msg:"data not fetched"})
  }
  
}

export const getImage = async(req,res)=>{
  try{
    const id= req.params.id
    const response = await model.findById(id)
    if(response){
      res.status(200).json({status:"success",res:response})
    }
} catch(err){
  res.status(400).json({status:"failed",msg:"data not fetched"})
}

}


export const postAllImageData=async(req,res)=>{
  try{
        let data = await fetch('https://picsum.photos/v2/list?page=1&limit=6')
        data = await data.json()
        await model.insertMany(data)
         
        res.status(201).json(data)
  } catch(err){
    res.status(400).json({status:"failed"})
  }
 
}

export const addImageData =async (req,res)=>{
  try{
    const data = req.body
    // console.log(data);
   
     let imageData = await model.create(data)
     let image = await imageData.save()
     
     res.status(201).json({status:"success",msg:"image added successfully!"})


  } catch{
    res.status(400).json({status:"failed",msg:"Image not added"})
  }
 
}
export const updateImageData = async(req,res)=>{
  
  // console.log("id---------",id);
  // console.log("data---------",data);
  try{
      const id  = req.params.id;
      const data = req.body
      const response = await model.findByIdAndUpdate(id,data,{new:true});
      if(response){

        res.status(200).json({status:"success",msg:"Image Data Edited Successfully!"})
      }
      
  } catch(err){
    res.status(400).json({status:"failed",msg:"Image not Updated"})
  }
  
}
export const deleteImageData =async (req,res)=>{
  const id  = req.params.id;
  console.log(id);
  try{
      
      const response = await model.findByIdAndDelete(id,{new:true});
      
      if(response){
        res.status(200).json({status:"success",msg:"Image Data Edited Successfully!"})

      
      }
      

  } catch(err){
    res.status(400).json({status:"failed", msg:"Image not Deleted"})
  }
}

