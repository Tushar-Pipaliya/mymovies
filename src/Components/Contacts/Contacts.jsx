import React from 'react'
import Navbar from '../Navbar/Navbar'

function Movie() {
  return (
    <div className='bg-black px-4' 
     >
      <Navbar/>

      <div     className='min-h-screen bg-right w-full bg-cover bg-right px-4'
          style={{ backgroundImage: `url(https://media.istockphoto.com/id/1093553650/photo/contact-speech-bubble-isolated-on-yellow.jpg?s=612x612&w=0&k=20&c=KvPp8W8WQmn4Z4YPb8uv2F4cdrz2ImqSmaoH6XVJr9s=)` }}
          id="Header"></div>
    </div>
  )
}

export default Movie

