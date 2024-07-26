const exp=require('express')
const app=exp()


const userApp=require('./APIs/userApi')
const productApp=require('./APIs/productApi')

app.use('/product-api',productApp)
app.use('/user-api',userApp)
app.use('*',(req,res,next)=>{
    console.log(req)
    res.send({message:"Invalid path"})
})

app.use((err,req,res,next)=>{
    res.send({message:"Error-occurred",errorMessag:err.message})
})


require('dotenv').config()// process.env.secret_key

const cors=require('cors');
app.use(cors({
    origin:"http://localhost:5173"
}))

const {MongoClient}=require('mongodb') //127.0.0.1 is ip adddress, 27017 is db port number
let mClient=new MongoClient(process.env.db_url)
mClient.connect()
.then((connect_obj)=>{
    const backenddb=connect_obj.db('pvpdb')
    const usersCollection=backenddb.collection('users')
    const productsCollection=backenddb.collection('products')
    const cartsCollection=backenddb.collection('carts')
    
    app.set('usersCollection',usersCollection)
    app.set('productsCollection',productsCollection)
    app.set('cartsCollection',cartsCollection)
    console.log("DB is Connected")
    app.listen(process.env.port,()=>console.log('http server started at port 4000')) //4000 is http port number
})
.catch(err=>{
    console.log("Error ",err)
})