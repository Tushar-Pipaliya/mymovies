import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { FaSearch } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { NavLink, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";


const MenuLinks = [
    { id: 1, name: 'Home', link: '/Home' },
    { id: 2, name: 'Movie', link: '/Movie' },
    { id: 3, name: 'Tv Show', link: '/TvShow' },
    { id: 4, name: 'Pricing', link: '/Pricing' },
    { id: 5, name: 'Blog', link: '/Blog' },
    { id: 6, name: 'Contacts', link: '/Contacts' },
];

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve logged-in user data from localStorage
        const loggedInUser = JSON.parse(localStorage.getItem("loggedinUser"));
        if (loggedInUser) {
            setUser(loggedInUser); // Set the logged-in user
        }
    }, []);

    const handleLogout = () => {
        // Remove user and logged-in status from localStorage
        localStorage.removeItem("loggedinUser");
        localStorage.setItem("loggedin", false); // Set logged-in status to false
        setUser(null); // Clear the current user state

        // Redirect to login page
        navigate("/login");
    };

    return (
        <div className="px-4">
            <div className="flex justify-between items-center text-secondary uppercase">
                {/* Logo */}
                <div className="flex items-center">
                    <NavLink to="/">
                        <img src={logo} alt="Logo" className="h-10" />
                    </NavLink>
                </div>

                {/* Desktop Menu Items */}
                <div className="hidden md:flex items-center">
                    <ul className="flex items-center font-bold text-sm container">
                        {MenuLinks.map(({ name, link }) => (
                            <li key={name} className="py-[38px] px-[23px]">
                                <NavLink
                                    to={link}
                                    className={({ isActive }) =>
                                        `hover:text-primary transition duration-300 cursor-pointer ${isActive ? 'text-primary' : 'text-secondary'}` 
                                    }
                                >
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right-side Items (Search, Language, User Info or Log Out) for Desktop */}
                <div className="font-bold flex gap-4 items-center hidden md:flex">
                    <div className="text-base flex items-center">
                        <FaSearch />
                    </div>

                    <div className="text-base flex items-center">
                        <p className="opacity-30 pr-3 relative bottom-0.5">|</p>
                        <GrLanguage className="text-primary" />
                        <select id="lang-dropdown" className="bg-transparent focus:outline-none">
                            <option value="en" className="text-black">EN</option>
                            <option value="hi" className="text-black">HI</option>
                            <option value="gu" className="text-black">GU</option>
                        </select>
                    </div>

                    {/* If user is logged in, show their name and log out button */}
                    {user ? (
                        <div className="flex items-center gap-4">
                            <p className="font-medium normal-case flex items-center"><CgProfile className='mr-1'/>{user.name}</p>
                            <button
                                onClick={handleLogout}
                                className="px-8 py-2 bg-transparent text-white font-semibold border-2 border-primary rounded-full hover:bg-primary hover:text-black text-sm transition duration-300 uppercase"
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <div>
                            <NavLink
                                to="/login"
                                className="px-8 py-2 bg-transparent text-white font-semibold border-2 border-primary rounded-full hover:bg-primary hover:text-black text-sm transition duration-300 uppercase"
                            >
                                Log In
                            </NavLink>
                        </div>
                    )}
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl">
                        &#9776; {/* Hamburger Icon */}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-800 text-white py-4">
                    <ul className="flex flex-col items-center space-y-4">
                        {MenuLinks.map(({ name, link }) => (
                            <li key={name}>
                                <NavLink
                                    to={link}
                                    className={({ isActive }) =>
                                        `block py-2 px-4 text-lg ${isActive ? 'text-primary' : 'text-white'}` 
                                    }
                                >
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Right-side Mobile Items */}
                    <div className="flex flex-col items-center mt-6 space-y-4">
                        <div className="text-base flex items-center">
                            <FaSearch />
                        </div>

                        <div className="text-base flex items-center">
                            <p className="opacity-30 pr-3 relative bottom-0.5">|</p>
                            <GrLanguage className="text-primary" />
                            <select id="lang-dropdown" className="bg-transparent focus:outline-none">
                                <option value="en" className="text-black">EN</option>
                                <option value="hi" className="text-black">HI</option>
                                <option value="gu" className="text-black">GU</option>
                            </select>
                        </div>

                        {/* If user is logged in, show their name and log out button */}
                        {user ? (
                            <div className="flex flex-col items-center gap-4">
                                <p className="text-white">Hello, {user.name}</p>
                                <button
                                    onClick={handleLogout}
                                    className="px-8 py-2 bg-transparent text-white font-semibold border-2 border-primary rounded-full hover:bg-primary hover:text-black text-sm transition duration-300 uppercase"
                                >
                                    Log Out
                                </button>
                            </div>
                        ) : (
                            <div>
                                <NavLink
                                    to="/login"
                                    className="px-8 py-2 bg-transparent text-white font-semibold border-2 border-primary rounded-full hover:bg-primary hover:text-black text-sm transition duration-300 uppercase"
                                >
                                    Log In
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
