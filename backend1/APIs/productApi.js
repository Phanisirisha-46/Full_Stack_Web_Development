const exp=require('express');
const proapp=exp.Router();
const expressAsyncHandler=require('express-async-handler');
const tokenVerify = require('../Middlewares/tokenVerification');
// route for get pros
proapp.get('/products',expressAsyncHandler(async(req,res)=>{
    //get pros obj
    const productsCollection=req.app.get('productsCollection')
    //get all pros
    let prolist=await productsCollection.find().toArray()
    ////send res
    res.send({message:"all pros",payload:prolist})


}))

proapp.get('/products/:id',expressAsyncHandler(async(req,res)=>{
    //get pros obj
    const productsCollection=req.app.get('productsCollection')
    //get pro by id
    let idofurl= Number(req.params.id)
    let prosearch = await productsCollection.findOne({id:{$eq:idofurl}})
    res.send({message:"product found",payload:prosearch})

}))


module.exports=proapp;