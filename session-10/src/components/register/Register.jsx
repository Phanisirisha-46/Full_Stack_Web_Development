import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

function Register() {
  
    let{register,handleSubmit,formState:{errors}}=useForm()
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
      navigate('/Registeredusers');
    } else {
      console.error('Failed to register user');
    }
    
  }
    return (
      <div>
        <h1 className="text-center mt-5 text-info display-3"><strong>Register</strong></h1>
        <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(handleSubmission)}>
          <div className="mb-3">
            <label htmlFor="username" className="formlabel">Username</label>
            <input type="text" {...register('username',{required:true,minLength:3,maxLength:6})} name="username" id="username" className="form-control" />
          </div>
          {errors.username?.type==='required' && <p className="text-danger" >Username is required </p> }
          {errors.username?.type==='minLength' && <p className="text-danger" >minimum length is 3 </p> }
          {errors.username?.type==='maxLength' && <p className="text-danger" >maximum length is 6 </p> }
          <div className="mb-3">
            <label htmlFor="password" className="formlabel">Password</label>
            <input type="password" {...register('password',{required:true,minLength:3})} name="password" id="password" className="form-control" />
          </div>
          {errors.password?.type==='required' && <p className="text-danger" >password is required </p> }
          <div className="mb-3">
            <label htmlFor="email" className="formlabel">E-mail</label>
            <input type="email" {...register('email',{required:true})} name="email" id="email" className="form-control" />
          </div>
          {errors.email?.type==='required' && <p className="text-danger" >Email is required </p> }
          <button type="submit"  className="btn btn-success">Regitser</button>
        </form>
      </div>
    );
  }
  
  export default Register;