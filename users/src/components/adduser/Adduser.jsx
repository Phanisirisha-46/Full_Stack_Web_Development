import React from 'react';
import { useForm } from 'react-hook-form';
import './Adduser.css';

import { useNavigate } from 'react-router-dom';
function Adduser() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  let navigate = useNavigate();
  async function handleSubmission(userObj)
    {
     console.log(userObj);
     
      let res=await fetch("http://localhost:3000/users/", {

      method: "POST",

      headers: { "Content-type": "application/json" },

      body:JSON.stringify(userObj)


    });

    
    console.log("res is", res);

    if (res.status === 201) {
      navigate('/userlist');
      
    } else {
      console.error('Failed to register user');
    }
    
  }
 

  return (
    <div className='css'>
      <h2>User Registration</h2>
      <br />
      <div className='f'>
        <form onSubmit={handleSubmit(handleSubmission)}>
          <div className="form-group">
            <input
              type="text"
              {...register('username', { required: true, minLength: 4, maxLength: 8 })}
              className='form-control'
              placeholder='Username'
            />
            {errors.username?.type === 'required' && <p className="text-danger">Username is required</p>}
            {errors.username?.type === 'minLength' && <p className="text-danger">Minimum length is 4</p>}
            {errors.username?.type === 'maxLength' && <p className="text-danger">Maximum length is 8</p>}
          </div>
          <br />
          <div className="form-group">
            <input
              type="date"
              {...register('date', { required: true })}
              id="dob"
              className="form-control"
            />
            {errors.date?.type === 'required' && <p className="text-danger">Date is required</p>}
          </div>
          <br />
          <div className="form-group">
            <select className="form-control" {...register('city', { required: true })}>
              <option value="" disabled>Select the city</option>
              <option value="Vijayawad">Vijayawada</option>
              <option value="Guntur">Guntur</option>
              <option value="Chitoor">Chitoor</option>
              <option value="Nellore">Nellore</option>
              <option value="Bandar">Bandar</option>
              <option value="Vizag">Vizag</option>
              <option value="Amaravati">Amaravati</option>
              <option value="Kurnool">Kurnool</option>
            </select>
            {errors.city?.type === 'required' && <p className="text-danger">City is required</p>}
          </div>
          <br />
          <button   type='submit' className="btn btn-primary">Add User</button>
        </form>
      </div>
      
   
    </div>
  );
}

export default Adduser;
