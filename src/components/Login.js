import React from 'react'
import Header from './Header'
import { useState, useRef } from 'react';
import { checkValidateData } from '../utils/Validate'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }

  const handleOnClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const result = checkValidateData(email.current.value, password.current.value);
    setErrorMessage(result);

    }

  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
      alt="logo"
      />
      </div>
      <form onSubmit={(e)=>e.preventDefault()}
        className='w-3/12 absolute p-12 bg-black my-36 m-auto left-0 right-0 text-white
       bg-opacity-80 rounded-lg'>
      <h1 className='font-bold text-3xl py-4 text-center'>{isSignInForm ? "Sign In" : "SignUp"}</h1>

      {!isSignInForm && (
        <input 
        type="text" 
        placeholder='Enter Your Name' 
        className='p-4 my-4 w-full bg-gray-700'
        />
      )}
        <input 
          ref={email}
        type="text" 
        placeholder='Enter Your Email' 
        className='p-4 my-4 w-full bg-gray-700'
        />
        <input 
          ref={password}
        type="password" 
        placeholder='Password' 
        className='p-4 my-4 w-full bg-gray-700'
        />
        <p className='p-2 my-4 text-red-700'>{errorMessage}</p>
        <button
         className='p-4 my-4 bg-red-700 w-full rounded-lg' 
         onClick={handleOnClick}>{isSignInForm ? "Sign In" : "SignUp"}
         </button>
        
        <p 
        className='py-6 cursor-pointer' 
        onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered! Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login;
