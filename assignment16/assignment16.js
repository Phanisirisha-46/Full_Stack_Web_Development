let a=6;
let b=3;
console.log("The sum of the two numbers:",a+b);
console.log("The difference of the two numbers:",a-b);
console.log("The product of the two numbers:",a*b);
console.log("The quotient of the two numbers:",a/b);
console.log("The remainder of the two numbers:",a%b);
console.log("\n");
// unary increment
let c=3;
console.log("The value of the  number:",c);
c++;
console.log("The unary increment of the  number:",c);
console.log("\n");
// unary decrement
let d=6;
console.log("The value of the  number:",d);
d--;
console.log("The unary decrement of the  number:",d);
console.log("\n");
// comparison operators
let n1=4;
let n2=5;
let n3="5";
if(n1==n2)
{
    console.log("The numbers are equal");
}
else if(n1<n2)
{
    console.log("The number n1 is lesser than number n2");
}
else if(n1>n2)
{
    console.log("The number n1 is greater than number n2");
}
else{}
console.log("\n");
if(n2===n3){
    console.log( typeof(n2));
    console.log( typeof(n3));
   
    console.log("The number n2 and number n3 are equal in number and type also");
}
else{
    console.log( typeof(n2));
    console.log( typeof(n3));
   
    console.log("The number n2 and number n3 are not equal in number or type also");
}

// difference between == and ===
console.log("\n");
let num1=6;
let num="6";
if(num==num1)
{
    console.log( typeof(num));
    console.log( typeof(num1));
    console.log( "There fore in == only the value will be checked not data type");
}
console.log("\n");
if(num===num1)
{
   
}
else{
    console.log( typeof(num));
    console.log( typeof(num1));
    console.log( "There fore in === both the value and the data types will be checked");

}
