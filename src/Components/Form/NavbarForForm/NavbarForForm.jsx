import React, { useState } from 'react';
import logo from '../../../assets/logo.png';
import { NavLink } from 'react-router-dom';
 
function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
    return (
        <div>
            <div className="py-9">
                <div className="flex justify-between items-center text-secondary uppercase">
                    {/* Logo */}
                    <div className="flex items-center">
                        <NavLink to="/">
                            <img src={logo} alt="Logo" className="h-10" />
                        </NavLink>
                    </div>
 
                    {/* Right-side Buttons (Log In & Sign Up) */}
                    <div className="font-bold flex gap-4 items-center">

                        <NavLink
                            to="/"
                            className="px-8 py-2 bg-transparent text-white font-semibold border-2 border-primary rounded-full hover:bg-primary hover:text-black text-sm transition duration-300 uppercase"
                        >
                            Sign Up
                        </NavLink>

                                                <NavLink
                            to="/login"
                            className="px-8 py-2 bg-transparent text-white font-semibold border-2 border-primary rounded-full hover:bg-primary hover:text-black text-sm transition duration-300 uppercase"
                        >
                            Log In
                        </NavLink>
                    </div>
 
                    {/* Mobile Hamburger Menu */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl">
                            &#9776;
                        </button>
                    </div>
                </div>
 
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-gray-800 text-white py-4">
                        <div className="flex flex-col items-center mt-6 space-y-4">
                            <NavLink
                                to="/login"
                                className="px-8 py-2 bg-transparent text-white font-semibold border-2 border-primary rounded-full hover:bg-primary hover:text-black text-sm transition duration-300 uppercase"
                            >
                                Log In
                            </NavLink>
                            <NavLink
                                to="/"
                                className="px-8 py-2 bg-transparent text-white font-semibold border-2 border-primary rounded-full hover:bg-primary hover:text-black text-sm transition duration-300 uppercase"
                            >
                                Sign Up
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default Navbar;