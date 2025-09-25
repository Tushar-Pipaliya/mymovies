import React from 'react'
import cardbg from '../../../assets/cardbg.png'
import cardbg1 from '../../../assets/cardbg1.jpg'
// import Data from '../moviesData/Data'
import Show from './Show'


function MoviesCard() {
  return (
    <div>
      <div 
        className=" bg-center bg-cover relative  "
        style={{ backgroundImage: `url(${cardbg1})` }}
        
      >
        <div 
          className=" relative min-h-screen  w-full bg-cover absolute bg-[#100e17]  opacity-[0.95]"
          style={{ backgroundImage: `url(${cardbg})` }}
        >
          <div className="relative z-10 pb-16 pt-32 px-4 ">
                  <div className="px-4 md:w-1/2 mb-14">
          <span className="block leading-none text-xs uppercase font-medium relative mb-3 tracking-wide text-primary">
            ONLINE STREAMING
          </span>
          <h2 className="mb-0 text-3xl md:text-4xl text-white font-bold">
            Upcoming Movies
          </h2>
        </div>

            <Show/>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoviesCard













