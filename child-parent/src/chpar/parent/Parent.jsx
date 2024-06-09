import React from 'react';
import Child from '../child/Child';
import './Parent.css';
import {useState} from 'react';
function Parent() {

    let [counter,setcounter]=useState(0);
  return (
   
    <div>
       <h1 >Parent</h1>
      <div className='par'>
     
      <h3 >Counter: {counter}</h3>
      </div>
     <br /><br />
     <Child data={{counter,setcounter}}/>
    </div>
        

  )
}

export default Parent