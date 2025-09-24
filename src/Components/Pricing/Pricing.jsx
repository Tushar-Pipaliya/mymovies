import React from 'react'
import Navbar from '../Navbar/Navbar'

function Movie() {
  return (
    <div className='bg-black px-4' 
     >
      <Navbar/>

      <div     className='min-h-screen bg-right w-full bg-cover bg-right px-4'
          style={{ backgroundImage: `url(https://web-images8.pixpa.com/ufeMtGGQoVdVww1rAdBBo6nkowk0i5ayHhhAYPIn6Kc/rs:fit:1200:0/q:90/czM6Ly9waXhwYS10ZXN0L2NvbS9sYXJnZS84MjE1MTIvMTczMzk1NjUwOS04NTM2NDktNjVhODNkNjhhNzJlZjA0NzFmMWRmNWQ0LTY0ZWNiOTlmODQ4MDc1NTE4NjFiMGJhMC1zY3JlZW5zaG90MjAyMDIzLTA4LTI4MjBhdDIwODEyNDAyMGFtLnBuZw==)` }}
          id="Header"></div>
    </div>
  )
}

export default Movie

