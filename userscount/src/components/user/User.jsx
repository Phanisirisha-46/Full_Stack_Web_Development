import React from 'react'
import Userc from '../userc/Userc';
import { useState,useEffect } from 'react';
import './User.css';
function User() {
    let [count,setcounter]=useState(0);
    let[user,setuser]=useState([]);

    function change()
    {
        setcounter(count+1);
    }
    async function todos()
    {
     
      let res=await fetch(" https://jsonplaceholder.typicode.com/users", {

      headers: { "Content-type": "application/json" },
     


    });
    const data=await res.json();
    setuser(data);
    console.log(data);

}

useEffect(() => {
    todos();
  }, []);  //execute only once



  return (
     <div>
         <Userc x={count}/>
    <div className='r'>
    <div className='row'>
           {user.map(user => (
            <div key={user.id} className='col-sm-3'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>{user.name}</h5>
                  <div className='card-text'>
                    <p>{user.username}</p>
                    <p>{user.phone}</p>
                    <p>{user.website}</p>
                    <p>{user.email}</p>
                    <p>{user.company.name}</p>
                    <p>{user.address.city}</p>

                    <h3>User {user.id}</h3>

                    <button   onClick={change} className="btn btn-primary">Add User</button> <br />

                  </div>
                  
                </div>
              </div>
              <br />
            </div>
          ))}


    </div>
    </div>
    </div>
   
       
  )
}

export default User