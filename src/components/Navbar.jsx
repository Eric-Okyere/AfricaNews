import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.png";
import { MdMenu, MdClose } from "react-icons/md";
import { FaUserAlt, FaPen } from "react-icons/fa";


const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const user = true; // Replace this with your user check logic

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="fixed w-full z-10 bg-[#1476D7] py-2 ">
      <div className="mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"}>
        <div className='flex'>
          
        <img src={Logo} alt='logo' className="w-20 h-15 object-cover px-2 " />
        <p className='hidden lg:block md:block pt-4 sm:block
        font-bold text-2xl'>AfricNews</p>
       
        </div>
        </Link>


{/* Search Input */}
<div className="flex items-center">
          <input
            type="text"
            placeholder="Search a post"
            className="rounded-full p-2 border-none focus:outline-none focus:ring focus:border-black
             w-32 md:w-52 lg:w-52 lg:px-14"
          />
         
        </div>

 {/* Toggle button for small screens */}
 <button
          onClick={toggleSidebar}
          className="lg:hidden text-white focus:outline-none "
        >
          {isSidebarOpen ?<MdClose  size={30} /> : <MdMenu size={30} /> }
        </button>

        {/* Navigation Links */}
        <div className={`lg:flex px-8 lg:mr-10 lg:space-x-10 space-x-4 ${isSidebarOpen ? 'flex' : 'hidden'}`}>
          {user ? (
            <h3 className='font-bold'>
              <Link to={"/write"} onClick={toggleSidebar}>
              <FaPen />
              </Link>
            </h3>
          ) : (
            <h3>
              <Link to={"/login"} className="text-white" onClick={toggleSidebar}>
                Login
              </Link>
            </h3>
          )}

          {user ? (
            <h3 className='font-bold'>
              <Link to={"/profile/id"} onClick={toggleSidebar}>
              <FaUserAlt />
              </Link>
            </h3>
          ) : (
            <h3>
              <Link to={"/register"} className="text-white" onClick={toggleSidebar}>
                Register
              </Link>
            </h3>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
