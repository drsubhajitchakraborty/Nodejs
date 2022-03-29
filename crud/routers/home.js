const express=require('express');
const db=require('../models/db');

const router = express.Router();

router.get('/',async(req,res)=>{
   
   try{
      console.log("Home Page / Data Fetching !!");
      const database=await db.find();
      res.json(database);   
   }catch(err)
   {
      res.send(err);
   }
})


router.get('/:id',async(req,res)=>{
   
   try{
      console.log("Home Page data fetch");
      const database=await db.findById(req.params.id);
      res.json(database);   
   }catch(err)
   {
      res.send(err);
   }
})



router.patch('/:id',async(req,res)=>{
   
   try{
      console.log("Home Page Updated!");
      const updatedata=await db.findById(req.params.id);
      updatedata.number=req.body.number;
      const a1=await updatedata.save();
      res.json(a1);  
   }catch(err)
   {
      res.send(err);
   }
})



router.post('/', async(req,res)=>{
      const detail= new db({
         name: req.body.name,
         address:req.body.address,
         city:req.body.city,
         number:req.body.number
      })

   try{
      const a1=await detail.save();
      res.send(a1);
   }catch(err)
   {
      res.send(err);
   }
})




module.exports= router;