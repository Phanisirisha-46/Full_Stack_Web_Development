//create a http server
 //import express module
 const exp=require('express');
 const app=exp();

 app.use(exp.json());

let userlist=[
    {id:1,name:'ravi'},
    {id:1,name:'ravi'}
]


//create sample rest api(req handlers-routes)
// route for grt users
app.get('/users',(req,res)=>{
    res.send({message:"all users",payload:userlist})
})
//url parameter with":"
app.get('/users/:id',(req,res)=>{
   req.params;//=>{id:10}
   let userid=req.params.id;
   let getuser=userlist.find(user=>user.id==userid)
   if(getuser!=undefined)
   res.send({message:"one-user",payload:getuser})
   else
   res.send({message:"Invalid User"})
})

//route to create user
app.post('/user',(req,res)=>{
    res.send({message:"user created"});
})




 //assign port number to http server of express app
 app.listen(4000,()=>{
    console.log('http sever started on port 4000');
 })


 //route to create user
 app.post("/user",(req,res)=>{
    let newuser=req.body;
    userlist.push(newuser)
    res.send({message:"NEw USER CREATED",payload:userlist})
 })

  //route to edit user
  app.put("/user",(req,res)=>{
    let modifieduser=req.body;
    let index=userlist.findIndex(user=>user.id===modifieduser.id)
    if(index==-1)
        res.send({message:"USERNOT FOUND"})
    else{
        userlist[index]=modifieduser;
        res.send({message:"USER MODIFIED"})
    }
 })

 app.delete('/user/:id',(req,res)=>{
   let userid=Number(req.params.id);
    let index=userlist.findIndex(user=>user.id===userid)
    if(index==-1)
        res.send({message:"USERNOT FOUND"})
    else{
        userlist.splice(index,1);
        res.send({message:"USER DELETED"})
    }
})