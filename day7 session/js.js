//immutable
let x=123;
let y=x+10;

let o="siri";
let i=o+"vaishu";
console.log(x);
console.log(y);

console.log(i);
console.log(o);

//mutable
let person={
    name:"padma",
    age:"60",
};

person.name="vijay";

console.log(person);

//copy

let u=10;
let p=u;

console.log(u);
console.log(p);
u=700;
console.log(u);

let test={
    a:10,
    b:20,
}

let testcopy=test;
console.log(test);
test.a=123
console.log(test);
console.log(testcopy);
let t={...test}; //spread operator
test.a=120
console.log(test);
console.log(t);

//error handling
try{
    console.log(a);
}
catch(err)
{
    console.log("err is",err);
}
console.log(t);
//promises are also done along with synchronous  and asynchronous;

