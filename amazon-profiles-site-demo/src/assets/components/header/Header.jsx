import React from 'react';
import './Header.css';


function Header() { 

    return (
            
            <ul className='navbar'>

                <div className='logo'>
                    <img src="https://clipartcraft.com/images/amazon-logo-transparent-black.png" alt="" width="70px" />
                    <h3>amazon</h3>
                </div>
                <div className='list'>
                <li> <h4>Home</h4></li>
                <li><h4>SignUp</h4></li> 
                <li><h4>Login</h4> </li>
                </div>
                

            </ul>
       

       
    );
}


export default Header;