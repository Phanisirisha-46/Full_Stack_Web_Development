import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import { FaHome } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaShopify } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";

function Header() {
  return (
    <div className='d-flex flex-wrap justify-content-around header'>
      <h1>
      <FaShopify className='text-white'/>MyShop</h1>
    <ul className='nav fs-5 p-3'>
    <li>
        <Link to="" className='nav-link text-white'>
        <FaHome className='fs-4 text-warning'/>   Home</Link>
      </li>
        <li>
        <Link to="login" className='nav-link text-white'>
        <MdOutlineLogin  className='fs-4 text-warning'/>Login</Link>
      </li>
      <li className='nav-item'>
        <Link to="register" className='nav-link text-white'>
        <SiGnuprivacyguard className='fs-4 text-warning'/>Register</Link>
      </li>
      <li className='nav-item'>
        <Link to="aboutus" className='nav-link text-white'>
        <IoMdInformationCircle  className='fs-4 text-warning'/>Aboutus</Link>
      </li>
     
    </ul>
  </div>
  )
}

export default Header