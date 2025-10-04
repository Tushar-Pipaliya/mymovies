import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaSearch, FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn } from 'react-icons/fa'
import footerbg from '../../assets/footerbg.jpg'
import logo from '../../assets/logo.png'
import payment from '../../assets/payment.png'  // Assuming the image path is correct.

const MenuLinks = [
  { name: 'Home', link: '/' },
  { name: 'Movie', link: '/Movie' },
  { name: 'Tv Show', link: '/TvShow' },
  { name: 'Pricing', link: '/Pricing' },
  { name: 'Blog', link: '/Blog' },
  { name: 'Contacts', link: '/Contacts' }
]

const Footer = () => (
  <footer className="bg-black pt-20 " style={{ backgroundImage: `url(${footerbg})`, backgroundSize: 'cover' }}>
    <div className=" ">
      {/* Top section with logo and nav links */}
      <div className="flex px-4 mx-4 flex-wrap items-center pb-9 border-b-2 border-b-[#12151e] shadow-[0px_1px_0px_0px_rgba(143,143,143,0.14)]">
        <Link to="/Home" className="w-full sm:w-1/4 text-center sm:text-left">
          <img src={logo} alt="Logo" className="mx-auto sm:mx-0" />
        </Link>
        <nav className="w-full  sm:w-3/4 mt-5 sm:mt-0">
          <ul className="flex flex-wrap justify-center sm:justify-end text-sm gap-7 container">
            {MenuLinks.map(({ name, link }) => (
              <li key={name} className="p-2 font-bold uppercase text-[#c3c3c3]">
                <NavLink to={link} className="hover:text-primary transition duration-300">
                  {name}
                </NavLink>
              </li>
            ))}
            <form className="ml-7 relative w-full sm:w-auto mt-4 sm:mt-0">
              <input
                type="text"
                placeholder="Find Favorite Movie"
                className="focus:outline-none w-full sm:w-72 border-0 bg-[#12151e] text-white p-4 px-6 text-sm rounded-full pr-20 shadow-[inset_0px_4px_9px_0px_rgba(0,0,0,0.25)]"
              />
              <button className="absolute right-5 top-1/2 -translate-y-1/2 border-0 bg-transparent text-sm text-primary p-0">
                <Link to={"/Home"}><FaSearch /></Link>
              </button>
            </form>
          </ul>
        </nav>
      </div>

      {/* Bottom section with links and social icons */}
      <div className="pt-10 px-4 mx-4 pb-12 flex flex-wrap justify-between">
        <ul className="flex flex-wrap text-sm font-semibold text-[#bcbcbc] uppercase gap-12">
          {['Faq', 'Help Center', 'Terms Of Use', 'Privacy'].map((item) => (
            <li key={item} className="hover:text-primary transition duration-300">
              <Link>{item}</Link>
            </li>
          ))}
        </ul>

        <ul className="flex gap-4 text-[#bcbcbc] justify-center sm:justify-end mt-5 sm:mt-0">
          {[FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn].map((Icon, index) => (
            <li key={index} className="flex items-center justify-center h-9 w-9 rounded-full shadow-[inset_0px_4px_9px_0px_rgba(0,0,0,0.25)] bg-[#12151e] text-center text-[12px]">
              <Link>
                <Icon className="block text-sm" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Copyright Section */}
      <div className="py-6 px-8 bg-black ">
        <div className="flex flex-wrap justify-between items-center">
          {/* Copyright Text */}
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <p className="text-sm text-[#bcbcbc] font-semibold">
              Copyright © 2025. All Rights Reserved By <Link to="/Home" className="text-primary hover:underline">Movflx</Link>
            </p>
          </div>

          {/* Payment Methods */}
          <div className="w-full sm:w-1/2 text-center sm:text-right mt-4 sm:mt-0 flex justify-end">
            <img src={payment} alt="Payment Methods" className="mx-auto sm:mx-0" />
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
