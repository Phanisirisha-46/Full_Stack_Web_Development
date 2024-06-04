import './App.css';
import Product from "./assets/components/Product";

function App() {
  // state
  let pro1={
    id: 1,
    title: "Fjallraven",
    price: 109.95,
    description: <p>"Your perfect pack for everyday <br/>use and walks"
    "in the forest. <br />Stash your laptop (up to 15 inches) in the <br /> padded sleeve, your everyday"</p>,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
    rate: 3.9,
    count: 120
  }
}
  let pro2={
    id: 2,
    title: "Mens Casual ",
    price: 22.3,
    description: <p> "Your perfect pack for  <br /> everyday use and walks" <br />
    "in the forest. Stash your laptop (up to 15 inches) <br /> in the padded sleeve, your everyday"</p>,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
    rate: 4.1,
    count: 259
  }
}
  let pro3=
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: <p>"great outerwear jackets <br /> for Spring/Autumn/Winter, <br />suitable for many occasions, such as  <br />working, hiking,  camping, mountain/rock <br />climbing, cycling, traveling <br />
     or other outdoors."</p>,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500
        }
  }
  let pro4=
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description: <p>"The color could be slightly <br /> different between on the screen and in practice. <br /> Please note that body builds vary by person, <br /> therefore, detailed size information should <br /> be reviewed below on the product description."</p>,
    
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430
    }
  }
  let pro5={
    id: 5,
    title: "John Hardy Women's ",
    price: 695,
    description: <p>"From our Legends Collection, the Naga was inspired  <br />by the mythical water dragon that protects <br /> the ocean's pearl. Wear facing  <br />inward to be bestowed with love and <br /> abundance, or outward for protection."</p>,
    
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400
    }
  }
  let pro6=
  {
    id: 6,
    title: "Solid Gold Petite ",
    price: 168,
    description: <p> "Satisfaction Guaranteed. <br />Return or exchange any order within <br /> 30 days.Designed and sold by Hafeez Center <br /> in the United States. <br /> Satisfaction Guaranteed. <br /> Return or exchange any order within <br /> 30 days."</p>,
    
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3.9,
      count: 70
    }
  }
  
  return (
    <div className="main">
    <h1>Products</h1>
    {/* nest product */}
    <br />
    <div className='Card'>
      <Product product={pro1}/>
      <Product product={pro2}/>
      <Product product={pro3}/>
      </div>
      <br /><br /> <br />
      <div className='Card'>
      <Product product={pro4}/>
      <Product product={pro5}/>
      <Product product={pro6} />
    </div>
   </div>
   
     
  );
}
export default App;
