import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='w-full flex h-[70vh] justify-center items-center'>
    <div className='bg-blue-500 p-6 mt-32 rounded-lg  flex flex-col justify-center
      items-center  space-y-4 w-[80%] md:w-[25%]'>
      <h1 className='text-2xl font-bold text-left'>Login into your accont</h1>
          <input className='w-full outline-0 px-4 py-2 rounded-lg' type='text' placeholder='Enter your name'/>
          <input className='w-full outline-0 px-4 py-2 rounded-lg' type='email' placeholder='Enter your email'/>
          <input className='w-full outline-0 px-4 py-2 rounded-lg' type='password' placeholder='Enter your password'/>
          <button className='w-full px-4 py-2 text-lg font-bold text-white bg-black
          rounded-lg hover:bg-slate-600 hover:text-black '>
              Login</button>

              <div className=' hover:text-slate-600'>
                  <Link className='flex justify-between font-bold' to={"/login"}>Already have an account? 
                   <p className='font-semibold text-white ml-6 hover:text-black'>
                    Login</p></Link>
              </div>
          </div>
  </div>
  )
}

export default Register