import axios from 'axios';
import React,{useContext} from 'react'
import { useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'
import './register.css'
import {useNavigate } from 'react-router-dom';


export const Register = () => {

    const navigate=useNavigate()

  const [details, setDetails] = useState({
    username: "",
    email: "",
    phone: "",
    password:"",
    img:""
});
const [formError,setFormError]=useState({});
const [isSubmit,setIsSubmit] = useState(false);
const {error,dispatch}=useContext(AuthContext)

  const handleChange=(e)=>{
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  const handleClick= async (e)=>{
    e.preventDefault()
    setFormError(validator(details));
        setIsSubmit(true);
  }

  const validator=(values)=>{

    const errors = {};
    const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!values.username)
    {
        errors.username="Username required*"
    }
    if(!values.password)
    {
        errors.password="Password required*"   
    }
    if(!values.phone)
    {
        errors.phone="Phone Number required*"   
    }
    if(!values.email)
    {
        errors.email="E-Mail required*"   
    }
    if(values.email && !values.email.match(validEmail))
    { 
        errors.email="Please enter valid email"
    }
    if(!values.img)
    {
        errors.img="Profile image required*"   
    }
    return errors;

}
useEffect(()=>{

    const submit  = async()=>{
    
        if(Object.keys(formError).length=== 0 && isSubmit )
        {
          try{
            const res= await axios.post("/auth/register",details)
            dispatch({type:"CREATE_USER",payload:res.data.details})
          }catch(err){
            dispatch({type:"CREATE_FAILED",payload:err?.response?.data})
          }
          navigate("/")
          alert("Successfully Registered!")
    }}
    submit();
})


  return (
      <div className="login">
        <form className='register-form'>
        <p className='login-title'>Register Here!</p>
        <p className='Register-text' >Experience the real Vacation with perfect bed and the nature!</p>
        <div className='login-field'>
            <input type="text" placeholder='Enter User Name' name='username' className='login-input' required onChange={handleChange}/>
            <p className='login-error'>{formError?.username}</p>
        </div>
        <div className='login-field'>
            <input type="email" placeholder='Enter G-Mail' name='email' className='login-input' required onChange={handleChange}/>
            <p className='login-error'>{formError?.email}</p>

        </div>
        <div className='login-field'>
            <input type="number" placeholder='Enter Phone Number' name='phone' className='login-input' required onChange={handleChange}/>
            <p className='login-error'>{formError?.phone}</p>

        </div>
        <div className='login-field'>
            <input type="password" placeholder='Set Password' name='password' className='login-input' required onChange={handleChange}/>
            <p className='login-error'>{formError?.password}</p>

        </div>
        <div className='login-field'>
            <input type="text" placeholder="paste your profile image url" className='login-input' onChange={handleChange} name="img"/>
            <p className='login-error'>{formError?.img}</p>

        </div>
        <div className='login-field'>
            <input type="submit" className='login-btn' onClick={handleClick} />
        </div>

        {error && <span>{error.message}</span>}
      
            <div className='login-footer'>
            Already have an account? <Link to="/login">Sign in</Link>
            </div>
          </form>

      </div>
  )
}
