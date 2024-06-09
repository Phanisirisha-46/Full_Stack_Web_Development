import {useState} from "react";
function Child(props){

    let [sam,setsam]=useState(100);
    return(
        <div className="bg-warning p-4">
            <h2>Child</h2>
            <h3>Counter in Child -{props.data.counter}</h3>
            <button className="btn btn-light m-4"
            onClick={props.data.changecounter}>
                Change
            </button>

            <button className="btn btn-secondary" onClick={()=> props.data.getdatafromchild(sam)}
            >Send data to parent</button>
        </div>
        
    );
}

export default Child;