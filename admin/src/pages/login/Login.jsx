import React from 'react'
import "./login.css"
import { useState,useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {


    const [credentials,setCredentials]=useState({
        username:undefined,
        password:undefined
    })
    const [formError,setFormError]=useState({});
    const [isSubmit,setIsSubmit] = useState(false);

    const { loading,error,dispatch}=useContext(AuthContext)
    

    const navigate =useNavigate()
    const handleChange=(e)=>{
        setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
        
        
    }

    const handleClick=  e =>{
        e.preventDefault()
        setIsSubmit(true);
        setFormError(validator(credentials)); 
    }

    const validator=(values)=>{

        const errors = {};
        if(!values.username)
        {
            errors.username="Username required*"
        }
        if(!values.password)
        {
            errors.password="Password required*"
        }
        return errors;

    }
    useEffect(()=>{

        const submit  = async()=>{
        
            if(Object.keys(formError).length=== 0 && isSubmit )
            {
                dispatch({type:"LOGIN_START"})
            try{
                const res= await axios.post("/auth/login",credentials)
                if (res.data.isAdmin){
                    dispatch({type:"LOGIN_SUCCESS", payload:res.data.details})
                    navigate("/")
                }else{
                    dispatch({type:"LOGIN_FAILUE",payload:{message:"You are not Admin!"}})
                }
                
            }catch(err){
                console.log("in err:",err)
                dispatch({type:"LOGIN_FAILUE",payload:err?.response?.data})
            }
        }}
        submit();


    },[formError])
    
  return (
    <div className='login' >
    <div className='login-form'>
        <p className='login-title'>Login Here!</p>

        <div className='login-field'>
            <input type="text" placeholder=' Enter username' id='username' className='login-input' onChange={handleChange} required/>
            <p className='login-error'>{formError?.username}</p>

        </div>
        <div className="login-field">
            <input type="password" placeholder='Enter Password' id='password' className='login-input' onChange={handleChange} required/>
            <p className='login-error'>{formError?.password}</p>
        </div>

        { error && <p className='login-error'>{error.message}</p>}
        

        <div className='login-field-btn'>
            <button onClick={handleClick} className='login-btn'> Login </button>
        </div>
        
        <div className='login-footer'>
        {/* ------ONLY ADMINS ARE ALLOWED------ */}
        </div>
        &copy;BookYourStay
    </div>
        
    </div>
    
  )
}

export default Login