import React from 'react'
import { Link ,Outlet} from 'react-router-dom'
function Tech() {
  return (
    <div>
        <ul className='nav justify-content-end  fs-4'>
        <li className='nav-item'>
          <Link to="java" className='nav-link text-center'>Java</Link>
        </li>
        <li className='nav-item'>
          <Link to="node" className='nav-link text-center'>Node</Link>
        </li>
        <li className='nav-item'>
          <Link to="vue" className='nav-link text-center '>Vue</Link>
        </li>
        </ul>
        {/*placeholder to display children of tech component*/}
        <Outlet/>
    </div>
  )
}

export default Tech