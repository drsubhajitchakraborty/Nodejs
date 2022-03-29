const express=require('express');
const db=require('../models/db');

const router = express.Router();

router.get('/',async(req,res)=>{
   
   try{
      console.log("Contact Page");
      const database=await db.find();
      res.json(database);   
   }catch(err)
   {
      res.send(err);
   }
})

module.exports= router;