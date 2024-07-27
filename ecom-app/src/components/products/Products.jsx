import "./Products.css";
import { useState, useEffect } from "react";
import Product from "../product/Product";

function Products() {
  let [products, setProducts] = useState([]);
  //error state
  let [err, setErr] = useState("");
  async function getProducts() {
    try{
      let res = await fetch("http://localhost:4000/product-api/products");
      let productsData = await res.json();
      console.log(productsData)
      setProducts(productsData.payload);

    }
    catch (err) {
      console.log("err is ", err);
      setErr(err.message);
    }

 
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
        {products.map((productObj) => (
          <div className="col" key={productObj.id}>
            <Product productObj={productObj} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;