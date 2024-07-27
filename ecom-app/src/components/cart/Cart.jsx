import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { userLoginContext } from "../../contexts/userLoginContext";
import { MdDelete } from "react-icons/md";
import "./Cart.css";


function Cart() {
  let { currentUser } = useContext(userLoginContext);
  let [cart,setCart]=useState([]);
 
// to get latest cart
async function getUserCart()
{
  let res=await fetch(`http://localhost:4000/user-api/cart/${currentUser.username}`)
  let data = await res.json();
  setCart(data.payload.products)

}
useEffect(()=>{
  getUserCart()},[]
)
//delete product from cart
async function deletepro(cartItem)
{
  
    let res=await fetch(`http://localhost:4000/user-api/delete-from-cart/${currentUser.username}`,{
      method:"PUT",
      headers: { "Content-type": "application/json" },
      body:JSON.stringify(cartItem)}
    )
    console.log(res)

}
 

  return (
    <div>
      {currentUser.products.length === 0 ? (
        <p className="display-1 text-center text-danger">Cart is empty</p>
      ) : (
        <table className="table text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Brand</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cartItem) => (
              <tr key={cartItem.id}>
                <td>{cartItem.id}</td>
                <td>{cartItem.title}</td>
                <td>{cartItem.price}</td>
                <td>{cartItem.brand}</td>
                <button className="btn" onClick={() => deletepro(cartItem)}>
                    <MdDelete />
                  </button>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Cart;