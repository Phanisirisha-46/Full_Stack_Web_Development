//scope
let a=6;
 
function sum()
{
    let b=9;

    if(b===9)
    {
        let c=7;
        return (a+b+c);

    }
    
}

let res=sum();
console.log(res);

let x=40;

function change()
{
    x=60;
    return x;

}
x=change();
console.log(x);
// closure
function done(v)
{
    let b=v;
    return function dd(){
        let c=10;
        return b+c;
    }
}
let result = done(90);
console.log(result);
let s=result();
console.log("sum:",s);

//hoisting

console.log(num1);
console.log(num2);
var num1=10;
var num2=20;

//convert
//declarations, console, intialization....
// advanced
let arr=[-3,56,77,80,90]

let r1=arr.filter(element=>element%2==0);
let r2=r1.map(element=>element+10);
console.log(r2);
let r3=arr.filter(element=>element%2!=0);
let r4=r3.map(element=>element+20);
console.log(r4);

let emps=[
    {
        eno:100,
        name:'siri',
        age:21,
        salary:3000,
    },
    {
        eno:200,
        name:'suri',
        age:23,
        salary:8000,
    },
    {
        eno:300,
        name:'sara',
        age:19,
        salary:9000,
    },
    

]

let p=emps.reduce((e1,e2)=>e1.age<e2.age?e1 : e2);
console.log(p);
let q=emps.map((e1)=>e1.salary+5000);

console.log(q);
let r=emps.filter((e1)=>e1.age>=21 && e1.age<=23);
console.log(r);

//class new inheritance

class student{
    constructor(sno,age)
    {
        this.sno=sno;
        this.age=age;
    }
    getstudent()
    {
        console.log(this.sno);
        console.log(this.age);
        
    }
}

let stu=new student("siri",90);
stu.getstudent();
console.log(stu);

// old inheritance
let studentss={
    college:"pvpsit",
    address:"kanuru",
    number:780356485,
}

let std1={
    name:"sir",
    roll:"30"
}

let std2={
    name:"vaish",
    roll:"31"
}

Object.setPrototypeOf(std1,studentss);
Object.setPrototypeOf(std2,studentss);
console.log(std1);
console.log(std2);
