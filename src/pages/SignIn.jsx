import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='bg-indigo-200 p-12 md:p-15 flex items-center justify-center'>
      <div className='bg-white w-full md:max-w-xs p-10 rounded-lg'>
        <h1 className='text-3xl text-center mb-10'>Sign In</h1>
        <form action="#" className='flex flex-col'>
          
          <input className='border p-2 rounded-lg py-1 mb-4 placeholder:italic placeholder:text-slate-400' type="text" name="email" aria-aria-label='Email' placeholder='Email'/>
          <input className='border p-2 rounded-lg py-1 mb-4 placeholder:italic placeholder:text-slate-400' type="password" name="password" aria-label='Password' placeholder='Password'/>
          <div className='flex items-center mb-5'>
            <div className='flex gap-1 items-center'>
              <FaCheckCircle className='text-green-600'/>
              <p className='text-gray-600 text-sm'>Remember Me</p>
            </div>
            <Link className='ml-auto text-sm text-gray-600' to="#">Forgot Password?</Link>
          </div>
          <div className='flex mt-5 items-center gap-5'>
            <button className='bg-indigo-600 text-white font-semibold py-2 px-5 whitespace-nowrap rounded-full w-full hover:bg-indigo-900 duration-500 flex items-center justify-center text-base md:text-sm'>
              Sign In
            </button>
            <button className='font-semibold w-full py-2 px-5 whitespace-nowrap rounded-full w-auto hover:bg-gray-800 hover:text-white hover:border-gray-900 duration-500 flex items-center justify-center text-base md:text-sm border-2 text-gray-500 border-gray-200'>
              Create Account
              
            </button>
          </div>
        </form>
      </div>
  </div>
  )
}

export default SignIn