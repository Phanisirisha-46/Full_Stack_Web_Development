import './Product.css';
import {useContext,useState} from 'react';
import {userLoginContext} from '../../contexts/userLoginContext'
import { useNavigate } from "react-router-dom";

function Product(props) {
  let navigate = useNavigate();
  let productObj=props.productObj;
  let {currentUser}=useContext(userLoginContext)

  //error state
  let [err, setErr] = useState("");
  async function addProductToCart(productObj){
    //add current user data to productObj
    console.log(productObj)
      let username=currentUser.username;
      let res=await fetch(`http://localhost:4000/user-api/add-to-cart/${username}`,{
        method:"PUT",
        headers: { "Content-type": "application/json" },
        body:JSON.stringify(productObj)
      })
      
      let result = await res.json();
      console.log(result);
        //navigate to cart component
  if(result.payload.modifiedCount===1)
    {
      navigate('/user-profile/cart')
    }
   
  }


  return (
    <div className='card text-center h-100 bg-light'>
    <div className="card-body d-flex flex-column justify-content-between">
      <p className="fs-4 text-secondary">{productObj.title}</p>
      <img src={productObj.thumbnail} alt="" srcset="" />
      <p className="fs-6 text-danger">{productObj.brand}</p>
      <p className="lead">{productObj.description}</p>
      <p className="fs-3 text-warning">${productObj.price}</p>
      <button className="btn btn-success" onClick={()=>addProductToCart(productObj)}>Add to cart</button>
    </div>

    </div>
  )
}

export default Product