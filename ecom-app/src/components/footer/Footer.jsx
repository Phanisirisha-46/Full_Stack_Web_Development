import React from 'react'
import './Footer.css'
import { FaAddressCard } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
function Footer() {
  return (
    <div className='d-flex justify-content-around bg-dark text-center text-white p-3 fs-4'>
      <div>
        <p className=' text-info  bg-dark  fs-4'><FaBuilding /></p>
        <p>PVPSIT</p>
        <p>Vijayawada</p>
      </div>
      <div>
      <p className=' text-info bg-dark  fs-4'><FaAddressCard /></p>
        <p>pvp@gmail.com</p>
        <p>99999999999</p>
      </div>
    </div>
  )
}

export default Footer