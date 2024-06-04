
// API CREATION OR CONTACT
function todos()
{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())
    .then(posts=>console.table(posts))
    .catch(err=>console.log(err))
}

todos()