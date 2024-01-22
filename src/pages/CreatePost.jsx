import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import { useNavigate } from 'react-router';
import {ImCross} from 'react-icons/im'



const CreatePost = () => {
  const [selectedImage, setSelectedImage] = useState(null);

//   Funtion for viewing an image
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    // Additional logic or state updates related to file handling can be added here
  };


  const [title,setTitle]=useState("")
  const [desc,setDesc]=useState("")
//   const [file,setFile]=useState(null)
//   const {user}=useContext(UserContext)
  const [cat,setCat]=useState("")
  const [cats,setCats]=useState([])

//   const navigate=useNavigate()

  const deleteCategory=(i)=>{
    let updatedCats=[...cats]
    updatedCats.splice(i)
    setCats(updatedCats)
 }

 const addCategory=()=>{
     let updatedCats=[...cats]
     updatedCats.push(cat)
     setCat("")
     setCats(updatedCats)
 }




  return (
    <div>
      <Navbar />

      <div className='px-4 pt-16 md:px-[200px]'>
        <h1 className='font-bold text-2xl sm:text-3xl mt-8'>Create Post</h1>

        <form className='w-full flex flex-col space-y-4 md:space-y-8 p-4 md:p-8 rounded-lg bg-blue-500'>
          <input
              onChange={(e)=>setTitle(e.target.value)}
            type='text'
            placeholder='Enter post title'
            className='px-4 py-2 outline-none'
            value={title}
          />
          <input
            onChange={handleFileChange}
            type='file'
            className='px-4'
          />
          {selectedImage && (
            <img
              src={selectedImage}
              alt='SelectedImage'
              className='w-full max-h-72 object-cover mt-4'
            />
          )}
          <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4'>
            <input
               value={cat} onChange={(e)=>setCat(e.target.value)}
              className='px-4 py-2 outline-none'
              placeholder='Enter post category'
              type='text'
            />
            <div
              onClick={addCategory}
              className='bg-black text-white px-4 py-2 font-semibold cursor-pointer'
            >
              Add
            </div>


 {/* categories */}
 <div className='flex px-4 mt-3'>
            {cats?.map((c,i)=>(
                <div key={i} className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
                <p>{c}</p>
                <p onClick={()=>deleteCategory(i)} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross/></p>
            </div>
            ))}
            
            
            </div>

          </div>
          <textarea
          value={desc}
              onChange={(e)=>setDesc(e.target.value)}
            rows={5}
            className='px-4 py-2 outline-none'
            placeholder='Enter post description'
          />
          <button
            //   onClick={handleCreate}
            className='bg-black w-full mx-auto text-white rounded-lg font-semibold px-4 py-2 md:text-xl text-lg'
          >
            Create a post
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePost;
