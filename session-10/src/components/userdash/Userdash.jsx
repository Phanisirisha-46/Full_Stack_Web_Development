import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Userdash() {
  let { state } = useLocation();




  return (
    <div className='text-center'>
      <h2>Userdash</h2>
      <div className='mt-5'>
      <p>{state.username}</p>
      <p>{state.email}</p>
      </div>
    </div>
  );
}

export default Userdash;
