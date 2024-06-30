// creating requests
const exp=require("express");
const app=exp();
app.use(exp.json())

let pro=[
    {
        pid:10,
        name:"watch",
        company:"google",
        cost:"20000",
    },
    {
        pid:20,
        name:"ear pods",
        company:"amazon",
        cost:"30000",

    }
]

//define routes
app.get('/products',(req,res)=>{
    res.send({message:"all products",payload:pro})
})

//to read an url parameter use - ":"
app.get('/products/:pid',(req,res)=>{
    req.params;//=>{pid:10}
    let proid=req.params.pid;
    let getpro=pro.find(product=>product.pid==proid)
    if(getpro!=undefined)
    res.send({message:"one-product",payload:getpro})
    else
    res.send({message:"Invalid Product"})
 })

 
  //route to edit product
  app.put('/product',(req,res)=>{
    let modipro=req.body;
    let index=pro.findIndex(product=>product.pid===modipro.pid)
    if(index==-1)
        res.send({message:"Product FOUND"})
    else{
        pro[index]=modipro;
        res.send({message:"Product MODIFIED"})
    }
 })

 app.delete('/product/:pid',(req,res)=>{
    let proid=parseInt(req.params.pid);
     let index=pro.findIndex(product=>product.pid===proid)
     console.log('Index found:', index);
     if(index==-1)
         res.send({message:"PRODUCT NOT FOUND"})
     else{
         pro.splice(index,1);
         res.send({message:"PRODUCT DELETED"})
     }
 })

 //route to create product

 app.post("/product",(req,res)=>{
    let newpro=req.body;
    pro.push(newpro)
    res.send({message:"NEW product CREATED",payload:pro})
 })


 //assign port number to http server of express app
 app.listen(3500,()=>{
    console.log('http sever started on port 3500');
 })
