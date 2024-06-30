//import from both files
let data2=require('./one') 
let data1=require('./two') //json format convert
console.log(data1.object)
console.log(data2.names)
data2.print()