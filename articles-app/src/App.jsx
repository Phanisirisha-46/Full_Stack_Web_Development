import './App.css';
import Article from "./assets/components/articles/Article";
import Header from "./assets/components/header/Header";
function App() {
  // state
  let pro1={
   
    image:"https://www.sureteam.co.uk/wp-content/uploads/2019/06/New_healthy_working_system.jpeg",
    name: <p>News App using ReactJS <br /> (Parsing XML RSS feed to JSON)</p>,
    position: <p>News App using ReactJS <br /> (Parsing XML to JSON) Photo by <br /> Christina Morillo from  <br />PexelsLive Demo:</p>,
    pic:"https://tse2.mm.bing.net/th?id=OIP.S4JCxRyXocxKC5vmxc7QCQHaE7&pid=Api&P=0&h=180",
    picc:"http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png",
    date:"Aug 12, 2020 04:32",
}
let pro2={
  image:"https://www.shutterstock.com/image-illustration/white-word-blog-suspended-by-600nw-311525351.jpg",
  name: <p>Medium Like Blogging App <br /> Using Angular 9 and Firebase</p> ,
  position:<p>Creating a Medium-Like Blog App <br />  Using Angular 9 and Firebase Photo by <br /> Miguel Á. Padriñán from <br /> PexelsLive Demo:</p>  ,
  pic:"https://tse2.mm.bing.net/th?id=OIP.S4JCxRyXocxKC5vmxc7QCQHaE7&pid=Api&P=0&h=180",
  picc:"http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png",
  date:"Jul 10, 2020 10:59",
  
}
let pro3={
  image:"https://img.freepik.com/free-vector/flat-india-map-infographics-template_23-2148828120.jpg?w=1800&t=st=1678568043~exp=1678568643~hmac=13bd91fd0eb56ddf19b1582352b648ccde00bfce0f88db1a323dbe718751c134",
  name: <p>COVOID 19 Tracker (Statistics) <br /> app Using Angular</p>,
  position: <p>COVID 19 Tracker (Statistics) app <br />
  Using Angular Dark <br />
  Mode Demolntroduction: <br /> Everyone is aware</p>,
   pic:"https://tse2.mm.bing.net/th?id=OIP.S4JCxRyXocxKC5vmxc7QCQHaE7&pid=Api&P=0&h=180",
   picc:"http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png",
   date:"Apr 04, 2020 08:46",

}


  
  return (
    <div className="main">
    {/* nest profiles */}
    <Header/>
    <br /><br />
    <div className='Card'>
      <Article pro={pro1}/>
      <Article pro={pro2}/>
      <Article pro={pro3}/>
      </div>
      <br /><br /> <br />
   </div>
   
     
  );
}
export default App;
