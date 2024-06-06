import React from 'react';
import './Profile.css';


function Profile(props) {
    console.log(props); 

    return (
        
             <div className="card-product">
                <div className='imagee'>
            <img src={props.pro.image} alt="" width="130px"/>
            </div>
            <h4>{props.pro.name}</h4>
            <h4>{props.pro.position}</h4>
            <button className='but'>{props.pro.more}</button>
            <br />
           
        </div>
       

       
    );
}


export default Profile;
