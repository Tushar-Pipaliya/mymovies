import React from 'react'
import Navbar from '../Navbar/Navbar'

function Movie() {
  return (
    <div className='bg-black px-4' 
     >
      <Navbar/>

      <div     className='min-h-screen bg-right w-full bg-cover bg-right px-4'
          style={{ backgroundImage: `url(https://i.ytimg.com/vi/EBhFJboMqiY/hqdefault.jpg)` }}
          id="Header"></div>
    </div>
  )
}

export default Movie

