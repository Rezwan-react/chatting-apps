import React, { useState } from 'react'
import Lottie from "lottie-react";
import loginani from '../../../public/animation/Login-Animation.json'
import './Login.css'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";



function Login() {
  // =============================== variables part start 

  const [email, setEmail]                        = useState('')
  const [emailError, setEmailError]              = useState('')
  const [password , setPassword]                 = useState('')
  const [passwordError, setPasswordError]        = useState('')
  const [showPassword, setShowPassword]          = useState(false)

  // ---------------------------------  variables part end 
  // =============================== functions part start 
  const handelEmail = (e)=>{
    setEmail(e.target.value)
    setEmailError('')
  }
  const handelPassword = (e)=>{
    setPassword(e.target.value)
    setPasswordError('')
  }
  const handleShowPassword = ()=>{
    setShowPassword(!showPassword)
  }
  // -------------------------------- functions part end
  // ============================== main submit function part start
  const handelSubmit = (e)=>{
    e.preventDefault()
    if(!email){
      setEmailError('Please Enter Your Email')
    }
     if(!password){
      setPasswordError('Please Enter Your Password')
    }
  }

  // ------------------------------- main submit function end


  return (
    <>
        <div className="container">
        <div className='w-full h-screen flex items-center'>
            <div className="animation w-[600px]">
                <Lottie animationData={loginani}/>
            </div>
            <div className="main_from">
                <h1 className='LoginHead'>Login</h1>
                <form onSubmit={handelSubmit} className='login_form'>
                  <label>Email</label> <br/>
                  <input onChange={handelEmail} type="email" placeholder="Enter your Email" /> <br/>
                  <p className='error'>{emailError}</p>
                  <label>Password</label> <br/>
                  <div className='pass'>
                    {
                      showPassword?
                      <FaRegEye onClick={handleShowPassword} className='eyeIcons' />
                      :
                      <FaRegEyeSlash onClick={handleShowPassword} className='eyeIcons' />
                    }
                  <input onChange={handelPassword} type={showPassword? "text" : "password"} placeholder="Enter your Password" /> <br/>
                  </div>
                  <p className='error'>{passwordError}</p>
                  <button className='loginButton' type="submit">Login</button>
                </form>
            </div>
        </div>
        </div>
    </>
  )
}

export default Login