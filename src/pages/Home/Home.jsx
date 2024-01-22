import React from 'react';
import Logo from "../../assets/Logo.png";
import News from '../../data/News';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div className='w-full'>
      <div className='pt-20'></div>

    {News.map((item)=>(
      
      <div key={item._id} className='flex flex-col justify-center items-center md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4 mb-20'>

      {/* Left */}
      <div className='w-full md:w-1/3 h-[200px] flex justify-center items-center'>
        <img src={item.iamge} alt='pic' className='w-[90%] md:max-w-sm lg:h-48 md:w-56 lg:w-full sm:w-[90%] h-[94%]' />
      </div>

      {/* Right */}
      <div className='flex flex-col w-[90%] md:w-1/2 pt-1'>
        <h1  className='text-lg font-bold md:mb-2 mb-1 md:text-2xl'>
         {item.title}
        </h1>

        <div className='flex mb-2 w-full text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
          <h1>AfricNews</h1>

          <div className='flex space-x-2'>
            <p>13/01/2024</p>
            <p>14:02pm</p>
          </div>
        </div>

        <p className='truncate text-sm md:text-lg w-full'>
         {item.description}
        </p>

        <Link to={`/posts/post/${item._id}`} className='text-blue-600'>Read More</Link>
      </div>
      
    </div>
  
    ))}
      
    </div>
  );
}

export default Home;
