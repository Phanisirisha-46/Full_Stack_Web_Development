
import Child from "../child/Child";
import {useState} from "react";
function Parent(){

    let [counter,setCounter]=useState(0);
    let [datafromchild,setdatafromchild]=useState(0);

        function changecounter(){
            setCounter(counter+1);
        }
        function getdatafromchild(data)
        {
            setdatafromchild(data);
        }
    return(
        <div className="bg-primary mx-auto mt-5 w-75 p-4 text-center">
        <h2>Parent</h2>
        <h2>Counter in Parent - {counter}</h2>
        <h3>{datafromchild}</h3>
        <button className="btn btn-light m-4"
            onClick={changecounter}>
                Increment
        </button>
       <Child data={{counter,changecounter,getdatafromchild}}/>

        </div>
        

    );

}
export default Parent;