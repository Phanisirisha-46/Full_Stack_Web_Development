
import { useContext } from "react";
import { sampleContext } from "../../contexts/testContext";
import {usersContext} from '../../contexts/usersContext';

function Home() {
  let {a,setA} = useContext(sampleContext);
  let {users,setUsers}=useContext(usersContext);
  return (
    <div className='text-center'>
     
      <h1>Welcome to App</h1>
      <h2>{a}</h2>
      <h5>{users[0].username}</h5>
      <button className="btn btn-success" onClick={()=>setA(a+1)}>Change the state</button>
      <p className="lead">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ipsum
        tempora error? Unde hic consequatur tempora voluptate eum in numquam
        dolorem dolor aliquam vitae voluptatibus, id consectetur, atque,
        expedita ducimus voluptatum quae nemo magnam excepturi ratione corrupti
        reprehenderit deserunt eveniet? Sapiente reprehenderit aliquid qui
        tempore deleniti fugit. Voluptatum cumque odit enim, eos aperiam
        quisquam eligendi laborum ex praesentium animi cum fugiat facere!
        Blanditiis ex ut consequuntur natus enim sint! Quod praesentium adipisci
        exercitationem repudiandae, a eum sapiente voluptates veniam alias sit
        dolore rerum voluptas aperiam rem nam! Aut, quas! Iure doloribus
        provident omnis debitis perferendis fugit quae quibusdam reprehenderit
        doloremque.
      </p>
      <p className="lead">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ipsum
        tempora error? Unde hic consequatur tempora voluptate eum in numquam
        dolorem dolor aliquam vitae voluptatibus, id consectetur, atque,
        expedita ducimus voluptatum quae nemo magnam excepturi ratione corrupti
        reprehenderit deserunt eveniet? Sapiente reprehenderit aliquid qui
        tempore deleniti fugit. Voluptatum cumque odit enim, eos aperiam
        quisquam eligendi laborum ex praesentium animi cum fugiat facere!
        Blanditiis ex ut consequuntur natus enim sint! Quod praesentium adipisci
        exercitationem repudiandae, a eum sapiente voluptates veniam alias sit
        dolore rerum voluptas aperiam rem nam! Aut, quas! Iure doloribus
        provident omnis debitis perferendis fugit quae quibusdam reprehenderit
        doloremque.
      </p>
    </div>
  );
}

export default Home;