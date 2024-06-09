import React from 'react'

function Child(props) {
  let {counter,setcounter}=props.data;

  function changecounter(data)
  {
    if(data==='+')
    setcounter(counter+1);
    else if(data==='-')
      setcounter(counter-1);
  }


   

  return (

    <div>

      <div className='par'>
      <button  onClick={()=>changecounter('+')}  className='btn btn-success ms-2'>
        Increment
      </button >
      <button  onClick={()=>changecounter('-')}  className='btn btn-success ms-5'>Decrement</button>

      </div>

    <h1>Child</h1>


    </div>



   
  )
}

export default Child