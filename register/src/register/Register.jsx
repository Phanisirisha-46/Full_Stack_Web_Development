import React from 'react';
import './Register.css';
import { useForm } from 'react-hook-form';
import {useState} from 'react';
function Register() {
  let { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState("not submitted"); 

  function handleSubmission(userObj) {
    setSubmitted("submitted");
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmission)} className='f'>
            <h2>Registration Form</h2><br />
        <div className='row'>
            <div className='col-sm-6'>
            <label htmlFor="firstname" className="formlabel">First Name</label>
        <input
          type="text"
          {...register('firstname', { required: true, minLength: 4, maxLength: 8 })}
          className='form-control'
          placeholder='First Name'
        />
        {errors.firstname?.type === 'required' && <p className="text-danger">First Name is required</p>}
        {errors.firstname?.type === 'minLength' && <p className="text-danger">Minimum length is 4</p>}
        {errors.firstname?.type === 'maxLength' && <p className="text-danger">Maximum length is 6</p>}
        </div>
        <div className='col-sm-6'>
        <label htmlFor="lastname" className="formlabel">Last Name</label>
        <input
          type="text"
          {...register('lastname', { required: true, minLength: 4, maxLength: 8 })}
          className='form-control'
          placeholder='Last Name'
        />
        {errors.lastname?.type === 'required' && <p className="text-danger">Last Name is required</p>}
        {errors.lastname?.type === 'minLength' && <p className="text-danger">Minimum length is 4</p>}
        {errors.lastname?.type === 'maxLength' && <p className="text-danger">Maximum length is 6</p>}
        </div>
        </div>
    <br />

        <div className='row'>
            <div className='col-sm-6'>
                
        <label htmlFor="dob" className="formlabel">Birthday</label>
        <input
          type="date"
          {...register('dob', { required: true })}
          id="dob"
          className="form-control"
        />
        {errors.dob?.type === 'required' && <p className="text-danger">Date of Birth is required</p>}

            </div>
            <div className='col-sm-6'>
            <label htmlFor="dob" className="formlabel">Gender</label><br />
            <input type="radio" id="female" name="gender" value="FEMALE" {...register('gender', { required: true })} />
          <label htmlFor="female">Female</label>
          <input type="radio" id="male" name="gender" value="MALE" {...register('gender', { required: true })} className='male'/>
          <label htmlFor="male">Male</label>
          {errors.gender?.type === 'required' && <p className="text-danger">Gender is required</p>}
            </div>
            
        </div>

<br />


        <div className='row'>
            <div className='col-sm-6'>

            <label htmlFor="email" className="formlabel">Email</label>
        <input
          type="text"
          {...register('email', { required: true,})}
          className='form-control'
          placeholder='Email'
        />
        {errors.email?.type === 'required' && <p className="text-danger">Email is required</p>}
        </div>
        <div className='col-sm-6'>
        <label htmlFor="Phonenumber" className="formlabel">Phone Number</label>
        <input
          type="text"
          {...register('phone', { required: true, pattern: /^\d{10}$/ })}
          className='form-control'
          placeholder='Phone Number'
        />
        {errors.phone?.type === 'required' && <p className="text-danger">Phone Number is required</p>}
        {errors.phone?.type === 'pattern' && <p className="text-danger">Phone Number must be exactly 10 digits</p>}
        </div>

        </div>
  <br />
          
        <div className="form-group">
          <label htmlFor="subject" className="formlabel">Select Subject</label>
          <select className="form-control" {...register('subject', { required: true })}>
            <option value="">Select the subject</option>
            <option value="Maths">Maths</option>
            <option value="Physics">Physics</option>
            <option value="English">English</option>
            <option value="Social">Social</option>
            <option value="Science">Science</option>
            <option value="Hindi">Hindi</option>
          </select>
          {errors.subject?.type === 'required' && <p className="text-danger">Subject is required</p>}
        </div>

        <br />

        <button   onSubmit={handleSubmit(handleSubmission)} type='submit' className="btn btn-primary">Submit</button>
        <h4>{submitted}</h4>
      </form>
    </div>
  );
}

export default Register;
