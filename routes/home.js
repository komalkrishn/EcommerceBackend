const express=require('express');
const router=express.Router();

router.get('/home',(req,res)=>{

    res.send("welcome to ecmmerce site");

});
module.exports=router;