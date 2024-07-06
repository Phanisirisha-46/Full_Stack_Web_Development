//create a http server
 //import express module
 const exp=require('express');
 const app=exp();
//import mongoclient
const {MongoClient}=require('mongodb');
//connect to mongodb server

let mclient=new MongoClient('mongodb://127.0.0.1:27017')
  mclient.connect().then(()=>{
   console.log("db connection success")
   app.listen(4000,()=>{
      console.log('http sever started on port 4000');
   })
})
  .catch(err=>console.log("err in db connection",err))




 const userapp=require('./API/userApi');
 const proapp=require('./API/productApi');
 //if path starts with /user-api,forward req to userApp
 app.use('/user-api',userapp);
 app.use('/product-api',proapp);

 //assign port number to http server of express app
