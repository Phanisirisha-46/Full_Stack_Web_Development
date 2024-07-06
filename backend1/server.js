//create a http server
 //import express module
 const exp=require('express');
 const app=exp();

 const userapp=require('./API/userApi');
 const proapp=require('./API/productApi');
 //if path starts with /user-api,forward req to userApp
 app.use('/user-api',userapp);
 app.use('/product-api',proapp);

 //assign port number to http server of express app
 app.listen(4000,()=>{
    console.log('http sever started on port 4000');
 })