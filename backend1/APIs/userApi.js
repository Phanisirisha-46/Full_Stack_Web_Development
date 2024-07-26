const exp=require('express')
const {Db}=require('mongodb')
const bcryptjs = require('bcryptjs');
const jwt=require('jsonwebtoken')
const userApp=exp.Router()
const tokenVerify=require('../Middlewares/tokenVerification')
const expressAsyncHandler=require('express-async-handler') // error handling rather than then catch

userApp.use(exp.json())

require('dotenv').config() // use this
//routes
userApp.get('/users',tokenVerify,expressAsyncHandler(async (req,res)=>{
    const usersCollection=req.app.get('usersCollection')
    let userlist= await usersCollection.find().toArray()
    res.send({message:"all users",payload:userlist})
}))


userApp.get('/users/:id',tokenVerify,expressAsyncHandler(async (req,res)=>{
    const usersCollection=req.app.get('usersCollection')
    let idOfUrl=Number(req.params.id)
    let userSearch=await usersCollection.findOne({id:{$eq:idOfUrl}})
        res.send({message:'User found',payload:userSearch})
    
}))



userApp.post('/user',expressAsyncHandler(async (req,res)=>{
    const usersCollection=req.app.get('usersCollection')
    const serachUser= req.body
    let user_exist=await usersCollection.findOne({name:{$eq:serachUser.name}})
    if(user_exist!==null)
    {    res.send({message:"user already exist"}) }
    else
    {
        let hashpass=await bcryptjs.hash(serachUser.password,5)
        serachUser.password=hashpass
        searchUser.products=[]
        await usersCollection.insertOne(serachUser)
        res.send({message:"New user created"})
    } 
}))

userApp.post('/login',expressAsyncHandler(async(req,res)=>{
    const usersCollection=req.app.get('usersCollection')
    let login_user=req.body
    let user_db=await usersCollection.findOne({name:login_user.name})
    if(user_db===null)
    {
        res.send({message:"Invalid username"})
    }
    else
    {
        let result=await bcryptjs.compare(login_user.password,user_db.password)
        if(result===false)
        {
            res.send({message:"Invalid password"})
        }
        else
        {
                let signedToken=jwt.sign({name:login_user.name},process.env.secret_key,{expiresIn:'1h'}) // to not to identify the key create env - environment variables..
                res.send({message:"user login successfully",token:signedToken,user:user_db})
        }
    }
}))

userApp.put('/user',tokenVerify,expressAsyncHandler((req,res)=>{
    let updateUser=req.body
    let index=userList.findIndex(user=>user.id===updateUser.id)
    if(index===-1)
        {
            res.send({message:"User not found"})
        }
    else
    {
        userList[index]=updateUser
        res.send({message:"User updated"})
    }
}))


userApp.delete('/user/:id',tokenVerify,expressAsyncHandler((req,res)=>{
    let userID=Number(req.params.id)
    let index=userList.findIndex(user=>user.id===userID)
    if(index===-1)
        {
            res.send({message:"User not found"})
        }
    else
    {
        userList.splice(index,1)
        res.send({message:"User deleted"})
    }
}))

userApp.put('/add-to-cart/:username',expressAsyncHandler(async(req,res)=>{
    let usersCollection=req.app.get('usersCollection')
    let user=req.params.username
    let proObj=req.body
    let result= await usersCollection.updateOne({username:{$eq:user}},{$push:{products:proObj}})
    console.log(result)
    res.send({message:"Product added",payload:result})


}))


module.exports=userApp;