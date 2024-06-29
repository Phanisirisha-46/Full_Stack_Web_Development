
// import inbuilt fs
const fs=require('fs')

//use fs

// read content asynchronously to avoid blocking
fs.readFile('./sample.txt',(err,data)=>{
    if(err)
        {
            console.log('something went worng');
        }
        else{
            console.log(data.toString());
        }
})
console.log('outside');

// write content
fs.appendFile('./sample.txt','new information',(err)=>{
    if(err)
        {
            console.log('something went worng');
        }
        else{
            console.log("write completed");
        }
})