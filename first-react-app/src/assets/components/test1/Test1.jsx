import React from 'react';
import './Test1.css';

function Test1(props) {
    console.log(props); // {person: {pid, age, name, image}}

    return (
        
             <div className="card-person">
            <h1>Person</h1>
            <h2>{props.person.pid}</h2>
            <h2>{props.person.age}</h2>
            <h2>{props.person.name}</h2>
            <div className='imagee'>
            <img src={props.person.image} alt={props.person.name} width="300px"/>
            </div>
            
           
        </div>
       

       
    );
}


export default Test1;
