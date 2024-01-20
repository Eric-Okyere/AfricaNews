import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfilePost from '../components/ProfilePost';
import { FaUserAlt } from "react-icons/fa";
const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className='px-8 pt-5 md:px-1 flex md:flex-row flex-col-reverse '>
        <div className='flex flex-col md:w-[90%] w-full '>
          <ProfilePost />
        </div>

        <div className='flex flex-col mr-10 pt-12 w-full md:w-[30%]'>
          <div className='w-full flex h-[70vh] justify-center items-center'>
            <div className='bg-blue-500 p-6 rounded-lg flex flex-col justify-center
              items-center space-y-4 w-[80%] md:w-full'>
              <FaUserAlt size={30} />
              <input className='w-full outline-0 px-4 py-2 rounded-lg' type='text' placeholder='Enter your name' />
              <input className='w-full outline-0 px-4 py-2 rounded-lg' type='email' placeholder='Enter your email' />
              <input className='w-full outline-0 px-4 py-2 rounded-lg' type='password' placeholder='Enter your password' />
             <div className='flex space-x-10 md:space-x-20 lg:space-x-20'>
              <button className='w-full px-4 py-2 text-lg font-bold text-white bg-black
                rounded-lg hover:bg-slate-600 hover:text-black '>
                Update
              </button>
              <button className='w-full px-4 py-2 text-lg font-bold text-white bg-black
                rounded-lg hover:bg-slate-600 hover:text-black '>
                Delete
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
