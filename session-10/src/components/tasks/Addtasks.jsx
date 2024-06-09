import React from 'react'
import { useForm } from "react-hook-form";
function Addtasks(props) 
{   const {tasks,settasks}=props.data;
    let{register,handleSubmit,formState:{errors}}=useForm();

    function handleSubmission(userObj)
    {
     settasks([...tasks,userObj.newtask]);
    }
  return (
    <div>
        <h4 className='text-info '>Add New Task</h4>
        <br />
        <div>
            <form onSubmit={handleSubmit(handleSubmission)} >
                <input type="text"   {...register('newtask')}    className='form-control ' placeholder='Add new task' />
                <button type="submit" className='btn btn-success mt-3'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Addtasks
