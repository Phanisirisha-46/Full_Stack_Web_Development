const form=document.querySelector("form");
const h1=document.querySelector('.result');
let firstInt=form.children[0];
let btn=form.children[1];
form.addEventListener("submit",(event)=>{
    event.preventDefault();
let v1=Number(firstInt.value);
if (v1 <= 0) {
    alert("Please enter a positive integer.");
    return; // Exit the function if input is invalid
  }
  let divisors=[];
    for(let i=1;i<=v1;i++)
        {
            if(v1%i==0)
                {

                    divisors.push(i);

                    
                }
        }
        h1.textContent=divisors.join(' , ');
});






