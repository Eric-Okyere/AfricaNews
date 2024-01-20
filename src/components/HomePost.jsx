import React from 'react'
import Home from '../pages/Home/Home'
import Navbar from './Navbar'
import Footer from './Footer'

const HomePost = ({children}) => {
  return (
 
    <>
<Navbar />

    <div>
      <Home />
      <Home />
      <Home />
      <Home />
      <Home />
      <Home />
      </div>

      <Footer />
      </>
   
  )
}

export default HomePost