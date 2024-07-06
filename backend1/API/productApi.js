const exp=require('express');
const proapp=exp.Router();
// route for grt pros
proapp.get('/products',(req,res)=>{
    res.send({message:"all products"})
})
module.exports=proapp;