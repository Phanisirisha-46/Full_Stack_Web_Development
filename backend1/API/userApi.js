
const exp=require('express');
const userapp=exp.Router();

 // add body parser middleware
 userapp.use(exp.json());

let userlist=[
    {id:1,name:'ravi'},
    {id:1,name:'ravi'}
]

//create sample rest api(req handlers-routes)
// route for grt users
userapp.get('/users',(req,res)=>{
    res.send({message:"all users",payload:userlist})
})
//url parameter with":"
userapp.get('/users/:id',(req,res)=>{
   req.params;//=>{id:10}
   let userid=req.params.id;
   let getuser=userlist.find(user=>user.id==userid)
   if(getuser!=undefined)
   res.send({message:"one-user",payload:getuser})
   else
   res.send({message:"Invalid User"})
})

//route to create user
userapp.post('/user',(req,res)=>{
    res.send({message:"user created"});
})

 //route to create user
 userapp.post("/user",(req,res)=>{
    let newuser=req.body;
    userlist.push(newuser)
    res.send({message:"NEw USER CREATED",payload:userlist})
 })

  //route to edit user
  userapp.put("/user",(req,res)=>{
    let modifieduser=req.body;
    let index=userlist.findIndex(user=>user.id===modifieduser.id)
    if(index==-1)
        res.send({message:"USERNOT FOUND"})
    else{
        userlist[index]=modifieduser;
        res.send({message:"USER MODIFIED"})
    }
 })

 userapp.delete('/user/:id',(req,res)=>{
   let userid=Number(req.params.id);
    let index=userlist.findIndex(user=>user.id===userid)
    if(index==-1)
        res.send({message:"USERNOT FOUND"})
    else{
        userlist.splice(index,1);
        res.send({message:"USER DELETED"})
    }
})

module.exports=userapp;