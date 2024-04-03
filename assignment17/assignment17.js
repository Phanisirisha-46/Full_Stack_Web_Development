let a=6;
let b=7;
if(a>b)
{
    console.log("a is greater than b");
}
else if(b>a)
{
    console.log("b is greater than a");
}
else{
    console.log("Both are equal");
}
console.log("\n");
let c=2;let d=5;let e=8;
console.log(c);console.log(d);console.log(e);
if(c>d){
    if(c>e)
    {
        console.log("c :greatest of three",c);

    }
    else{
        console.log("e :greatest of three",e);
    }
}
else if(d>e)
{
    console.log("d :greatest of three",d);
}
else{
    console.log("e :greatest of three",e);
}
console.log("\n");
function factors(num)
{
    for(i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            console.log("yes factor:",i);
        }
    
    }
}
let num=12;
console.log("factors of:",num);
factors(num);

console.log("\n");
//prime
function prime(p,f)
{
    if (p==1) f=0;
    else if(p==2 || p==3);
    else{
        for(i=2;i<=Math.sqrt(p);i++)
    {
        if(p%i==0)
        {
            f=0;
            break;
        }
    
    }
    }if(f==1)
    console.log("yes prime:",p); 
    else console.log("not prime:",p);
}
let p=23;let f=1;
prime(p,f);
//even factors
console.log("\n");
function evenfac(n)
{
    console.log("factors of:",n);
    for(i=1;i<=n;i++)
    {
        if(n%i==0 && i%2==0)
        {
            console.log("yes even factor:",i);
        }
    
    }
}
let n=12;
evenfac(n);
console.log("\n");

function sum(s)
{   ss=0;
    while(s>0)
    {
        r=s%10;
        ss=ss+r;
        s=Math.floor(s/10);
       
    }
    console.log("The sum of the number is:",ss);

}
s=prompt("Enter the number:");
s=parseInt(s);
sum(s);

