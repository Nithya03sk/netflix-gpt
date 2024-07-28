import React, { useEffect, useRef, useState } from 'react'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isErrorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const displayName = useRef(null);
  const navigate = useNavigate();

  const toggleSignForm = () =>{
    setIsSignInForm(!isSignInForm);
  }
  const onClickSignIn = () => {
    const msg = checkValidData(email.current.value,password.current.value,displayName?.current?.value);
    setErrorMsg(msg)
    if(msg){
      return
    }
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: displayName?.current?.value, 
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser(({ uid: uid, email: email, displayName: displayName })));
            navigate("/browse");
          }).catch((error) => {
            setErrorMsg(error)
          });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage)
          console.log(errorCode + "-" + errorMessage);
          // ..
        });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage)
          console.log(errorCode + "-" + errorMessage);
        });
    }
  }

  return (
    <div>
      <img className="absolute w-52 px-8 py-2 bg-gradient-to-b from-black" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
      <form onSubmit={(e) => {e.preventDefault()}} className='w-3/12 left-0 right-0 p-12 mx-auto my-36 absolute bg-black bg-opacity-80 text-white'>
        <h1 className='py-4  text-5xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <input ref = {email} className='p-4 my-2 w-full  bg-gray-600 bg-opacity-40 rounded' type='text' placeholder='Email Address' />
        {!isSignInForm && <input ref = {displayName} className='p-4 my-2 w-full  bg-gray-600 bg-opacity-40 rounded' type='text' placeholder='Full Name' />}
        <input ref = {password} className='p-4 my-2 w-full  bg-gray-600 bg-opacity-40 rounded' type='password' placeholder='Password' />
        <p className='text-red-500 py-2'>{isErrorMsg}</p>
        <button className='p-4 my-2 bg-red-700 rounded w-full' onClick={() => onClickSignIn()}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4  text-lg cursor-pointer' onClick={() => toggleSignForm()}>{isSignInForm ? "New to Netflix? Sign up now" : "Already a memeber? Sign In"}.</p>
      </form>
    </div>
  )
}

export default Login