import React, { useState } from 'react'
import './Register.css'
import Lottie from "lottie-react";
import RegAnimation from "../../../public/animation/RegAnimation.json"
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Bounce, ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Register() {
     // =============================== variables part start 
    const [name, setName]                                   = useState ('')
    const [nameError, setNameError]                         = useState ('')
    const [email, setEmail]                                 = useState ('')
    const [emailError, setEmailError]                       = useState ('') 
    const [password, setPassword]                           = useState ('')
    const [passwordError, setPasswordError]                 = useState ('')
    const [show, setShow]                                   = useState (false)
    const [conPassword, setConPassword]                     = useState (false)

    // =============================== functions part start 
       const handelName = (e)=>{
        setName(e.target.value)
        setNameError('')
       }

        const handelEmail = (e)=>{
           setEmail(e.target.value)
           setEmailError('')
        }
        
        const handelPassword = (e)=>{
          setPassword(e.target.value)
          setPasswordError('')
        }

        const handelShow = (e)=>{
          setShow(!show)
        }

        const handelConPass = (e)=>{
          setConPassword(!conPassword)
        }

    // ============================== main submit function part start
        const handelSubmit = (e)=>{
            e.preventDefault()

            if(name ==''){
                setNameError('Please Enter Your Name')
            }
            
            if(email ==''){
                setEmailError('Please Enter Your Email')
            }
            if(!password){
              setPasswordError('Please Enter Your Password')
            }
            else{
              toast.success('Register successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
            }
        } 


  return (
    <>
      <div className="container">
        <div className="w-full h-screen flex items-center">
        <div className="reg_animation  w-[600px]">
            <Lottie animationData={RegAnimation}/>
        </div>
        <div className="reg_form">
            <h1 className='RegHead'>Create account</h1>
            <form onSubmit={handelSubmit} >
                <label>Name</label> <br/>
                <input onChange={handelName} type="text" placeholder="Enter your Name" /> <br/>
                <p className='error'>{nameError}</p>
                <label>Email</label> <br/>
                <input onChange={handelEmail} type="email" placeholder="Enter your Email" /> <br/>
                <p className='error'>{emailError}</p>
                <label>Password</label> <br/>
                <div className='RegPass'>
                  {
                    show ?
                    <FaRegEye onClick={handelShow} className='RegEyeIcons' />
                    :
                    <FaRegEyeSlash onClick={handelShow} className='RegEyeIcons'/> 
                  }
                <input onChange={handelPassword} type={show? 'text' : 'password'} placeholder="Enter your Password" /> <br/>
                </div>
                
                <p className='error'>{passwordError}</p>
                <label>Confirm Password</label> <br/>
                <div className="conPass">
                {
                    conPassword ?
                    <FaRegEye onClick={handelConPass} className='RegEyeIcons' />
                    :
                    <FaRegEyeSlash onClick={handelConPass} className='RegEyeIcons'/> 
                  }
                <input type="password" placeholder="Confirm your Password" /> <br/>
                </div>
                <p className='error'>{passwordError}</p>
                <button type='submit' className='RegButton'  >Register</button>
            </form>
        </div>
        </div>
      </div>
    </>
  )
}

export default Register