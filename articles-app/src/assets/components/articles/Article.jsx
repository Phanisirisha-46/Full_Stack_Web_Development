import React from 'react';
import './Article.css';


function Article(props) {
    console.log(props); 

    return (
        
             <div className="card-product">
                <div className='imagee'>
            <img src={props.pro.image} alt="" width="320px" />
            </div>
            <div className='imageee'>
            <img src={props.pro.more} alt="" width="70px" />
            </div>
            <b className='title'>{props.pro.name}</b>
            <p>{props.pro.position}</p>
            <br />
                <ul className='name' >
                <li className='pic'>
            <img src={props.pro.pic} alt="" width="20px"/>
            </li>
            <li><p className='down'>Mehul Kothari</p></li>
                </ul>
               
           
            <div className='name'>
            <div className='pic'>
            <img src={props.pro.picc} alt="" width="20px"/>
            </div>
            <div>
                <p className='up'>{props.pro.date}</p>
            </div>
            </div>
            
            
           
        </div>
       

       
    );
}


export default Article;