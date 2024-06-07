import { useForm } from "react-hook-form";
function Register() {
  
    let{register,handleSubmit,formState:{errors}}=useForm()
    function handleSubmission(userobj)
    {
      console.log(userobj)
    }
    return (
      <div>
        <h1 className="text-center mt-5 text-info display-3"><strong>Register</strong></h1>
        <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(handleSubmission)}>
          <div className="mb-3">
            <lable htmlFor="username" className="formlabel">Username</lable>
            <input type="text" {...register('username')} name="username" id="username" className="form-control" />
          </div>
          <div className="mb-3">
            <lable htmlFor="password" className="formlabel">Password</lable>
            <input type="password" {...register('password')} name="password" id="password" className="form-control" />
          </div>
          <div className="mb-3">
            <lable htmlFor="email" className="formlabel">E-mail</lable>
            <input type="email" {...register('email')} name="email" id="email" className="form-control" />
          </div>
          <button type="submit"  className="btn btn-success">Regitser</button>
        </form>
      </div>
    );
  }
  
  export default Register;