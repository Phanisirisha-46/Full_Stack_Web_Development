let number=[2,4,5,6,7,9];
let sum=0;
for(i=0;i<number.length;i++)
{
    sum=sum+number[i];
}
console.log("the sum of array elements is:",sum);

let arr=[1,2,3,4];
let p=10;
let ar=arr.map(element=>{
    element=element+p;
    p=p+10;
    return element;
}
)
console.log(ar); 

let students=[

    { name:"ravi", marks :{ maths: 89, physics : 70 , chemistry :88}},

    { name:"bhanu", marks :{ maths: 98, physics : 50 , chemistry :68}},

    { name:"kiran", marks :{ maths: 50, physics : 82 , chemistry :94}},

]
let stu=students.reduce((s1,s2)=>s1.marks.maths>s2.marks.maths? s1 : s2);
console.log("highest mark student in maths:",stu.name);
let s=students.reduce((s1,s2)=>s1.marks.physics>s2.marks.physics? s1 : s2);
console.log("highest mark student in physics:",s.name);
let st=students.reduce((s1,s2)=>s1.marks.chemistry>s2.marks.chemistry? s1 : s2);
console.log("highest mark student in chemistry:",st.name);