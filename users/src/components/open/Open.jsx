import React from 'react'
import { Link } from 'react-router-dom'

function Open() {
  return (
    
    <div>
      <ul className='nav justify-content-end bg-secondary fs-4'>
        <li className='nav-item'>
          <Link to="adduser" className='nav-link text-white'>Registration form</Link>
        </li>
        </ul>
    </div>
  )
}

export default Open