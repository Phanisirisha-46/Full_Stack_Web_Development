//one
let number=[2,4,5,6,7];
let sum=0;
for(i=0;i<number.length;i++)
{
    sum=sum+number[i];
}
console.log("the sum of array elements is:",sum);

//two
let num=[1,2,3,4,5,6,7,8];
let n=[];
for(let x of num)
{
    if(x%2==0)
    n.push(x);
    else continue;
}
console.log(n);

//three
let elements=[2,3,5,23,78,90,54,34];
let prime=[];
for(let y of elements)
{
    let f=1;
    if(y==2 || y==3)
    f=1;
    else{
        for(i=2;i<=Math.sqrt(y);i++)
        {
           if(y%i==0)
           {
            f=0;
            break;
           }
        }
    }
    if(f==1)
    prime.push(y);
    else continue;
}
console.log(prime);
