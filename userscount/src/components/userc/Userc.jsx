import React from 'react';
import './Userc.css';
function Userc(props) {
    

  return (
    <div>
        <h1 className='c'>Usercount</h1>
        <h2 className='c'>{props.x}</h2>
    </div>
  )
}

export default Userc