import React from 'react';
import './Product.css';


function Product(props) {
    console.log(props); 

    return (
        
             <div className="card-product">
            <h3>{props.product.pid}</h3>
            <h2>{props.product.title}</h2>
            <h2>{props.product.price}</h2>
            <p>{props.product.description}</p>
            <h2>{props.product.category}</h2>
            <div className='imagee'>
            <img src={props.product.image} alt={props.product.image} width="100px"/>
            </div>
            <h2>{props.product.rating.rate}</h2>
            <h2>{props.product.rating.count}</h2>
            <br />
           
        </div>
       

       
    );
}


export default Product;
