import React from 'react'
import Navbar from '../Navbar/Navbar'

function Movie() {
  return (
    <div className='bg-black px-4 ' 
     >
      <Navbar/>

      <div     className='min-h-screen bg-right w-full bg-cover bg-right px-4 overflow-hidden'
          style={{ backgroundImage: `url(https://www.hdwallpapers.in/thumbs/2020/the_boys_tv_show_4k_hd-t2.jpg)` }}
          id="Header"></div>
    </div>
  )
}

export default Movie

