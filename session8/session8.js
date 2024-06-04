let person={
    "pid":100,
    "name":"ravi",
    "age":21,

}
let person1=JSON.stringify(person);
console.log(person1);

//api contact or creation
function comments()
{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res)=>res.json())
    .then(posts=>console.table(posts))
    .catch(err=>console.log(err))
}
comments()
async function posts()
{
    try{
        let res=await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await res.json()
        console.log(data)
    }
    catch (er)
    {
        console.log(er)
    }
    
}
posts()

//access head
let head=document.head;
console.log(head)
//access body
let body=document.body;
console.log(body)

// access other elements than head and body
let h1=document.querySelector('h1');
console.log(h1)

let fp=document.querySelector('.first');
console.log(fp)

let sp=document.querySelector('#firs')
console.log(sp)

// adding interactivity

h1.addEventListener('mousemove',()=>{
    h1.style.color='red'
    h1.style.backgroundColor='green'
    h1.style.fontSize='4rem'
    h1.textContent='I love my mom';
});

//increment counter

let counter=document.querySelector('.counter')
let but=document.querySelector('button')

but.addEventListener('click',()=>{
    counter.textContent=Number(counter.textContent)+1;

   
})
let h3ele=document.createElement('h3')
h3ele.textContent='hello'
console.log(h3ele)
//add element

document.body.appendChild(h3ele)
numbers=[10,20,30];

    for (let el of numbers) { //create element
        let h4 = document.createElement("h4"); //add content
        h4.textContent = el;
        //add to DOM
        document.body.appendChild(h4);
    }


let addElement = document.querySelector(".add-element");
addElement.addEventListener("click", () => {
    numbers.push(100);
    displayArray();
});
function displayArray() {
    //create element
        let h4 = document.createElement("h4"); //add content
        h4.textContent = numbers[numbers.length-1];
        //add to DOM
        document.body.appendChild(h4);
    
}
