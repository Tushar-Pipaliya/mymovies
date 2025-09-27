import React from 'react'
import Navbar from '../Navbar/Navbar'
import bg02 from '../../assets/bg02.jpg'
import MovieFilter from './MovieFilter/MovieFilter'
import Card from '../Card/Card'

function Movie() {
  return (
    <section>

      <div className=' bg-center bg-cover px-4 relative'
     style={{
        background: `url(${bg02}), linear-gradient(to right, #04081a, transparent)`,
        // Ensure the div takes full height of the viewport
      }}
    >
        <Navbar />
        <div className='flex items-center justify-center'>
            <div className='pt-28 pb-56 '>
              <h2 className='text-6xl leading-tight mb-7 font-bold  text-white'>Our <span className='text-primary'>Movie</span></h2>
              <ul className='flex itemes-center justify-center uppercase font-bold text-sm text-white '>
                <li className='text-primary cursor-pointer'>Homeone</li>
                <span className='mx-3'>|</span>
                <li className='cursor-pointer'>Movie</li>
              </ul>
            </div>
        </div>
      </div>
 <MovieFilter/>
 <Card/>
    </section>

    
  )
}

export default Movie

