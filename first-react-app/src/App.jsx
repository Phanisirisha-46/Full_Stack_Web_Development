import './App.css';
import Test1 from "./assets/components/test1/Test1";

function App() {
  // state
  
  let person1={pid:100,age:20,name:"siri",image:"https://c.pxhere.com/images/66/b8/fb80e3fc401511ff8d9c38eb0bdb-1573331.jpg!d"};
  let person2={pid:500,age:21,name:"saru",image:"https://c.pxhere.com/images/66/b8/fb80e3fc401511ff8d9c38eb0bdb-1573331.jpg!d"};
  
  return (
    <div className="main">
      <h1>Welcome to React</h1>
      {/* nest test1 */}
     <div className='Card'>
     <Test1 person={person1}/>
      <Test1 person={person2}/>

     </div>
     
    
      
     
    </div>
  );
}

export default App;
