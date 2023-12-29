import { Router } from "express"
import { addImageData, deleteImageData, getImage, getImageData, postAllImageData, updateImageData } from "../controllers/imageController.js"

const router =  Router()

router
  .get('/getimages',getImageData)
  .get('/getimage/:id',getImage)   
  .post('/addimage',postAllImageData)
  .post('/addimagedata',addImageData)
  .patch('/updateimage/:id',updateImageData)
  .delete('/deleteimage/:id', deleteImageData)

export default router 
