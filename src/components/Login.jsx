import React, { useState } from 'react'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignForm = () =>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
        <img className="absolute w-52 px-8 py-2 bg-gradient-to-b from-black" src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt = "logo" />
        <form className='w-3/12 left-0 right-0 p-12 mx-auto my-36 absolute bg-black bg-opacity-80 text-white'>
          <h1 className='py-4  text-5xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          <input className='p-4 my-2 w-full  bg-gray-600 bg-opacity-40 rounded' type='text' placeholder='Email Address'/>
          {!isSignInForm && <input className='p-4 my-2 w-full  bg-gray-600 bg-opacity-40 rounded' type='text' placeholder='Full Name'/>}
          <input className='p-4 my-2 w-full  bg-gray-600 bg-opacity-40 rounded' type='password' placeholder='Password'/>
          <button className='p-4 my-2 bg-red-700 rounded w-full'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className='py-4  text-lg' onClick={() => toggleSignForm()}>{isSignInForm ? "New to Netflix? Sign up now" : "Already a memeber? Sign In"}.</p>
        </form>
    </div>
  )
}

export default Login