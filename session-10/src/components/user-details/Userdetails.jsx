import React from 'react'
import { useLocation } from 'react-router-dom'

function Userdetails() {
   let {state}=useLocation()

  return (
    <div className='card'>
        <div className="card-body mx-auto w-50 rounded-5 m-5 shadow-lg">
            <h2>{state.user.name}</h2>
            <p>{state.user.username}</p>
            <p>{state.user.email}</p>
            <p>{state.user.phone}</p>
        </div>

    </div>
  )
}

export default Userdetails