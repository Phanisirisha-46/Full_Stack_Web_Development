import React from 'react';
import './Header.css';


function Header() { 

    return (
            
            <ul className='navbar'>

                <div className='logo'>
                    <img src="https://png.pngtree.com/element_our/png/20180904/modern-solution-letter-n-png_83123.jpg" alt="" width="70px" />
                    <h3><a href="">Home</a></h3>
                    <h3>About Author</h3>
                    <h3>About this Project</h3>
                </div>
                <div className='list'>
                <li><img src="https://tse4.mm.bing.net/th?id=OIP.NGIDdVP6vw9ue_D-mrEVFQHaHa&pid=Api&P=0&h=180" alt="" srcset="" width="40px" /></li>
                <li><img src="https://tse2.mm.bing.net/th?id=OIP.s8jLulVOKktX_fNIk4bUQgHaHa&pid=Api&P=0&h=180" alt="" srcset="" width="40px" /></li>
                <li><img src="https://tse2.mm.bing.net/th?id=OIP.rxFZ6j3SL0s9hKh9hpEnuQHaHa&pid=Api&P=0&h=180" alt="" srcset="" width="40px" /></li>
                <li><img src="https://clipground.com/images/linkedin-icon-png-9.png" alt="" srcset="" width="40px" /></li>
                </div>
                

            </ul>
       

       
    );
}


export default Header;