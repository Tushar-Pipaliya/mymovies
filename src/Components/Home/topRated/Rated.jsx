import React from 'react'
// import Card from '../moviesData/Card'
import Ratedshow from '../topRated/Ratedshow'
import ratedbg from '../../../assets/ratedbg.jpg'

function Rated() {
  return (
    <div>
      <div>
      <div 
    
                className=" bg-center bg-cover "
                style={{ backgroundImage: `url(${ratedbg})` }}
                
              
      >
        <div 
         
        >
          <div className="relative z-10 pb-16 pt-32 px-4 ">
                  <div className="px-4 mb-14 flex flex-col justify-center items-center">
          <span className="block leading-none text-xs uppercase font-medium relative mb-3 tracking-wide text-primary">
            ONLINE STREAMING
          </span>
          <h2 className="mb-0 text-3xl md:text-4xl text-white font-bold">
            Top Rated Movies
          </h2>
        </div>

            <Ratedshow/>
          
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Rated
