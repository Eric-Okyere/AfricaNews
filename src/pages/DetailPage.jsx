import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {BiEdit} from "react-icons/bi"
import {MdDelete} from "react-icons/md"
import Logo from"../assets/Logo.png"
import Comment from '../components/Comment'
import { useParams } from 'react-router-dom'
import News from '../data/News'

const DetailPage = () => {
  const { id } = useParams();
    
  // Find the card data based on the id
  const card = News.find((item) => item._id === id);

  if (!card) {
    // Handle the case where the card is not found
    return <div>Card not found</div>;
  }
  
  return (
    <div >
        <Navbar />

         <div className='px-8 md:px-[200px] pt-24'>
      <div className='flex justify-between items-center'>
      <h1  className='text-lg font-bold md:mb-2 mb:1 md:text-2xl'>
  {card.title}
  </h1>

  {/* <div className='flex items-center justify-center space-x-6'>
<BiEdit size={30}/>
<MdDelete size={30}/>
  </div> */}
 
      </div>


      <div className='flex items-center justify-between mt-2 md:mt-4'>
  <h1 className='mr-4'>AfricNews</h1>

<div className='flex space-x-2 mr-4'>
<p>13/01/2024</p>
<p>14:02pm</p>
</div>
  </div>
      <img src={card.iamge} alt='pic' className='w-[80%] mx-auto  mt-8 h-72' />
         </div>

      <div className='px-8'>
      <p className='mx-auto mt-8  text-lg'>
{card.description}
</p>

    <div className='flex items-center mt-8 space-x-8 font-semibold'>
    <p>Categories:</p>
    <div className='flex justify-center items-center space-x-2'>
    <div className='bg-gray-300 rounded-lg px-3 py-1'>Tech</div>
    <div className='bg-gray-300 rounded-lg px-3 py-1'>Ai</div>
    </div>
    </div>

   <Comment />

   <div className="w-full flex flex-col mt-4 md:flex-row" >
    <input type='text' placeholder='Leave a comment' 
     className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"
    />

<button
//  onClick={postComment}
  className="bg-black rounded-full text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">
  Add Comment</button>
    </div> 


        </div>   

        <Footer />
        </div>
  )
}

export default DetailPage