import React from 'react'
import Logo from "../assets/Logo.png"

const Footer = () => {
  return (
    <div className='bg-[#1476D7]'>
    <div className=' mt-20 w-full py-8 px-8 md:flex-row lg:flex-row
    flex justify-between text-center space-y-4 text-sm md:text-lg  flex-col sm:flex-row '>
    
<div className='flex text-white flex-col sm:justify-center '>
  <p>Breaking News</p>
  <p> We are here for you</p>
  <p>Have the world in your palm</p>
</div>

<div className='text-white'>
  <p>Forum</p>
  <p>Support</p>
  <p>Recent Post</p>
</div>

<div className='text-white'>
<p>Privacy Policy</p>
<p>About Us</p>
<p>Terms and conditions</p>
</div>
    </div> 
    
    <div className='flex justify-center'>
    <img  className='w-10' src={Logo} alt='brand'  />
    </div>

    <p className='text-center pb-6'>All rights reserverved @news market 2024</p>
    </div>
  )
}

export default Footer