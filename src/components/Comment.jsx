import React from 'react'
import {BiEdit} from "react-icons/bi"
import {MdDelete} from "react-icons/md"
const Comment = () => {
  return (
    <div className='flex flex-col mt-4 justify-center '>
    <h3 className='font-semibold mt-6 mb-4'>Comments:</h3>
    {/* Comments */}

  
    <div className='px-2 md:w-[80%] w-full py-6 mb-6 mx-auto bg-gray-200 rounded-lg'>
  <div className='flex flex-col md:flex-row items-center justify-between'>
    <div className='flex items-center space-x-56 md:mr-4'>
      {/* <h3 className='font-bold text-gray-600'>@africNews.com</h3>
      <div className='flex space-x-2 text-gray-500 text-sm'>
        <p>12/01/24</p>
        <p>16:45pm</p>
      </div> */}
    </div>

    <div className='flex space-x-6 mt-2 md:mt-0'>
      <BiEdit size={30} />
      <MdDelete size={30}/>
    </div>
  </div>

  <p className='px-4 mt-2 text-sm md:text-base'>
    This is authentic news!
  </p>
</div>

</div>
  )
}

export default Comment