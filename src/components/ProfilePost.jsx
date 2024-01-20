import React from 'react';
import Logo from "../assets/Logo.png"

const ProfilePost = () => {
  return (
    <div className='w-[90%] lg:pt-20 mx-auto'>
      
      <div className='flex flex-col justify-center items-center md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4 -mb-20'>

        {/* Left */}
        <div className='w-full md:w-1/3 h-[200px] flex justify-center items-center md:mr-20'>
          <img src={Logo} alt='pic' className='w-[90%] lg:h-48 md:w-[80%] lg:w-full sm:w-[90%] h-[94%]' />
        </div>

        {/* Right */}
        <div className='flex flex-col w-[90%] md:w-1/2 pt-1 lg:mr-10'>
          <h1 className='text-lg font-bold md:mb-2 mb-1 md:text-2xl'>
            THIS IS THE TITLE
          </h1>

          <div className='flex mb-2 w-full text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
            <h1>AfricNews</h1>

            <div className='flex space-x-2'>
              <p>13/01/2024</p>
              <p>14:02pm</p>
            </div>
          </div>

          <p className='text-lg md:text-lg w-full'>
            Production is where you make your app available to billions of users on Google Play. Before you can apply for production access, you need to run a closed test that meets our criteria. When you apply, you'll also need to answer some questions about your closed test.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePost;
