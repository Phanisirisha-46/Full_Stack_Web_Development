import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { sampleContext } from "../../contexts/testContext";


function Login() {
    let {a,setA} = useContext(sampleContext);



    let{register,handleSubmit,formState:{errors}}=useForm()
    let [usercred,setusererror]=useState('')
    let navigate=useNavigate();
    async function handlesubmission(obj)
    {
        let res=await fetch(`http://localhost:3000/users?username=${obj.username}&password=${obj.password}`);
        let usersArray=await res.json();
        if (usersArray.length ===0){
           setusererror('Username/Password are incorrect')
        }
        else{
            navigate('/userdash',{state:usersArray[0]})
        }

    }
  return (
    <div>
        <h1>Login</h1>
        <h2>{a}</h2>
        {usercred.length!==0&& <p className='fs-3 text-danger text-center'>{usercred}</p>  }
        <form className='w-50 mx-auto mt-5 bg-light p-4' onSubmit={handleSubmit(handlesubmission)}>
            <div className='mb-3'>
                <input type="text" {...register('username')} className='form-control' placeholder='username' />

            </div>
            <div className='mb-3'>
                <input type="passsword" {...register('password')} className='form-control'/>

            </div>
            <div>
                <button type='submit' className='btn btn-success'>  
                    Login
                </button>
            </div>

        </form>




    </div>
  )
}

export default Login