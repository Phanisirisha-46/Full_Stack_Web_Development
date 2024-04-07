let student={
    rollno:23,
    name:"siri",
    section:"3",
    branch:"cse",
    year:"2",
    cpga:9.67,
}

let bus={
    model:"express",
    colour:"blue",
    wheels:6,
    section:"government",
    travel_time:"10 hrs per day",
    journey:"from vijayawada to bandar",
}

let employee={
    empid:245,
    name:"sara",
    position:"manager",
    salary:3000,
    bonus:1000,
    insurance:"2years",
    projects:2,

}

let mobile={
    company:"redmi",
    ram:"8gb",
    camera:"2pixcels",
    colour:"black",
    type:"touchscreen",
    warranty:"3years",
}
console.log(JSON.stringify(student));
console.log(JSON.stringify(bus));
console.log(JSON.stringify(employee));
console.log(JSON.stringify(mobile));

let stu={
    rollno:23,
    name:"vaish",
    marks:[100,100,100,100,100],
    address:{
        dno:58,
        street:"sivaparvathi nagar",
        area:"yanamalakudhuru",
        city:"vijayawada",
        state:"andhra pradesh",
    },
    aggregate:function(){
            s=0;
        for(i=0;i<this.marks.length;i++)
            { 
                s=s+this.marks[i];
            }
    console.log("the sum of marks is:",s);
    }
}
console.log(JSON.stringify(stu));
stu.aggregate();



let product={
    pnumber:23,
    pname:"shirt",
    model:1,
    price:200,
    discount:function(p)
    {   
        y=(p*this.price)/100;
        console.log("the discount is:",y);
        console.log("the total discount price is:",this.price-y);
    }
}
console.log(JSON.stringify(product));
let p=15;
product.discount(p);


