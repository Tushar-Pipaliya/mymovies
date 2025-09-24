import React from 'react';
import bg01 from '../../../assets/bg01.jpg';
import Navbar from '../../Navbar/Navbar';
import { MdCalendarMonth } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { BsFillCaretRightFill } from "react-icons/bs";
import { Link } from 'react-router-dom';






function Header() {
  return (
    <div
      className='min-h-screen bg-right w-full bg-cover bg-right px-4'
      style={{ backgroundImage: `url(${bg01})` }}
      id="Header">
      
      <Navbar />
      <div className='flex items-center pt-32 pb-48'>
        <div className='container px-4 md:w-1/2 '>
          <h6 className='text-3xl text-primary font-bold'>Movflx</h6>
          <h2 className="text-6xl leading-tight mb-7 font-bold  text-white">Unlimited <span className='text-primary'>Movie</span>,<br /> TVs Shows, & More.</h2>
          <div>
            <ul className='text-white flex gap-5 items-center mb-9'>
              <li className='text-xs'>
                <span className=' uppercase text-[#21232b] border-2 bg-white font-bold py-1 px-2 mr-3'>PG 18</span>
                <span className=' bg-transparent text-white border-2 border-white py-1 px-3'>HD</span>
              </li>
              <li className='text-base font-bold text-[#e3dfdf] '>
                <a href="/" className='mr-1 hover:text-primary transition duration-300'>Romance,</a>
                <a href="/" className='hover:text-primary transition duration-300'>Drama</a>
              </li>
              <li className='flex items-center text-base font-bold text-[#e3dfdf]'>
                <span className='flex items-center mr-3'><span className='mr-2 text-primary'><MdCalendarMonth /></span> 2025</span>
                <span className='flex items-center'><span className='mr-2 text-primary'><MdAccessTime /></span> 118 min</span>
              </li>
            </ul>
          </div>
          <div>
            <Link>
              <button className="flex items-center text-base font-bold text-[#e3dfdf] px-9 py-4 bg-transparent text-white font-semibold border-2 border-primary rounded-full hover:bg-primary hover:text-black text-sm transition duration-300 uppercase">
                <BsFillCaretRightFill className=' mr-2 text-base'/>
                Watch now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
