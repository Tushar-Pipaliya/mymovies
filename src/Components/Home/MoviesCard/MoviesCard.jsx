import React from 'react'
import cardbg from '../../../assets/cardbg.png'
import cardbg1 from '../../../assets/cardbg1.jpg'
import Tab from './Tab/Tab.jsx'


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
            
            <Tab />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoviesCard













