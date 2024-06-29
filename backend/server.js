//create a http server
 //import express module
 const exp=require('express');
 const app=exp();

//create sample rest api(req handlers-routes)
// route for grt users
app.get('/users',(req,res)=>{
    res.send({message:"all users"})
})

 //assign port number to http server of express app
 app.listen(4000,()=>{
    console.log('http sever started on port 4000');
 })