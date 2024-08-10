import React from 'react'
import Header from './Header'
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { checkValidateData } from '../utils/Validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from "../constants/constants.js"

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }

  const handleOnClick = () => {
  const result = checkValidateData(email.current.value, password.current.value);
    setErrorMessage(result);

    if (result) return;
      
    if (!isSignInForm) {
      //sign up logic

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
    // Signed up 
        const user = userCredential.user;      
          updateProfile(user, {
            displayName: "Mamatha",
            photoURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACUCAMAAAAu5KLjAAAAMFBMVEXk5ueutLenrrHn6eqrsbS0ubzb3t+2vL7X2tzh4+S7wMPS1de/xMbCx8nIzM6xt7lOagnvAAADuUlEQVR4nO2b23asIAxAgShXhf//24IzPVNbnQGiQddhP/WteyWTcIuMdTqdTqfT6XQ6nU6n06kCWgt8AACYlFprY9Kf1wSYm1XgCyEor68X1hhFrwYx8BeDENbJKwUVQNvxp+K36RAmeR1PqYYNyYcpt+YSomBmseP4DKm/gCi4rXSvRcf2mZ8/SS6ivq2kmXIso+fcVFPlWUbPqV3ezcef5Q9P28wyO5YPzzbxhCLLVEctPMG/bZdbOHpP0KWSEUmuyVS55aCowwmZDfOXJ/HPE2SNJecjcdqrgkm+aroqyYSh1KwMJvGv0xS3zBd0lpC1e9sJJ12Ph/pYEm5Bqhagf5D1JEzOU9aJNI1Fac5EP04ZEJacByJNjQkm54Kow3ukpqbRRFUQ2UIEqAqK0NQQjDhLTnR2wxV6bPA0msicd83/UZNmGYJ7lNBNGhK2vVNtke6xWN5l6+GQmjSWTOJqiKhtMnaPQ8ZNjmwgEZaEl3L3uE64y+UMM/WaVMffhepw0l5rV98iDaTXsHUvBPRPwbVPBKTBrC12yjJ/UrGwt3hdvcljIJTv5xo8rZZXe5uH6tJbY7IN3F8KPBtaQv4hUzQdncnNe8NYLoDPkQxNanzlqT9Opgy2/fAZA+PFO9FBXGGUjyXRie8PRk7XGYoFPW+JDmL0F8j3C2DGKbFOfhraJd63ZQAA2lulxoRS1usrzRWviGJGJgy7rGOK54rWPiuijzFSa+dnq8YwLIRR2Wn2TstLTOpHRb3oDSLZrco8IqKvjbaypSow7dNnA7vT5E9dzqOsa9LjwUhv+dvl528P1YY0qADJ8X0Qt0y5mh2VaPw3btxdHD8zU5zbYiBnjpjpStk//XeavhFBBPJblCt34n4kVnbh1PO+aTjtahv0hMr2GqFOST2w/U1lJerwTR4wX9x/PjNMxwYU5JH5/uF56FkOXDg+lE8O+6QEjD0llA8Grg8RBXlUF9rjiCsw3ExpFkdciSAfz/M8LfJoBxSW6WMN1OJJZIl9yaSyTPGszjtZLB+elWkHd2K73PCc6jRRj/s1nnX9Ezu8Ve5ZsR6hR3NrKC6jisepAyhuS8hZo0qKp2qQc3C1hKK0gyTtRS/KdiFN6udBwbGjTf0sFH0g3i6YPOTf3Zy/E96nYGiFcsvxl2zNlpJc5C6ZulE3epI5twJTU8vclR09144l6yYEN0R6AHn7Tqj/WvogzaxtPOkJaJO8U3ujzdGLrHk/Yxtb5s2omSBak/k1xO+nXGLyJDudTj5fi7gzWTQ3rFAAAAAASUVORK5CYII="
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
            );
            
            navigate("/browse")
          }).catch((error) => {
            // An error occurred
            navigate("/error")
  // ...
});
        
        navigate("/browse")
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+ "-" +errorMessage)
    // ..
  });
    } else {
      //sign in logic
     signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
    // Signed in 
      const user = userCredential.user;
      navigate("/browse")
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+ "-" +errorMessage)
  });
    }

    }

  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src={BG_URL}
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
