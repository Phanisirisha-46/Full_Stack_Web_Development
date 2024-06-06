import './App.css';
import Profile from "./assets/components/profiles/Profile";
import Header from "./assets/components/header/Header";
import Footer from "./assets/components/footer/Footer";
function App() {
  // state
  let pro1={
    image:"https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1210-1024x683.jpg",
    name:"SIRISHA",
    position:"TeamLead",
    more: "Profile",
}
let pro2={
  image:"https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1210-1024x683.jpg",
  name:"SANGEETHA",
  position:"Manager",
  more: "Profile",
}
let pro3={
  image:"https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1210-1024x683.jpg",
  name:"SARU",
  position:"Employee",
  more:  "Profile",
}
let pro4={
  image:"https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1210-1024x683.jpg",
  name:"VAISH",
  position:"CEO",
  more:  "Profile",
}
let pro5={
  image:"https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1210-1024x683.jpg",
  name:"SRI",
  position:"Intern",
  more:  "Profile",
}
let pro6={
  image:"https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1210-1024x683.jpg",
  name:"PADMA",
  position:"Chairman",
  more:  "Profile",
}
let pro7={
  image:"https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1210-1024x683.jpg",
  name:"VIJITHA",
  position:"HR",
  more:  "Profile",
}
let pro8={
  image:"https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1210-1024x683.jpg",
  name:"DURGA",
  position:"Clean",
  more:  "Profile",
}

  
  return (
    <div className="main">
    {/* nest profiles */}
    <Header/>
    <br />
    <div className='Card'>
      <Profile pro={pro4}/>
      <Profile pro={pro6}/>
      <Profile pro={pro7}/>
      <Profile pro={pro1}/>
      </div>
      <br /><br /> <br />
      <div className='Card'>
      <Profile pro={pro2}/>
      <Profile pro={pro3}/>
      <Profile pro={pro5}/>
      <Profile pro={pro8}/>
    </div>
    <Footer/>
   </div>
   
     
  );
}
export default App;
