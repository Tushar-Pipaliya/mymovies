import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarForForm from '../NavbarForForm/NavbarForForm.jsx';
import formbg from '../../../assets/formbg.jpg';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons

const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false); // Add state for password visibility

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!input.email || !input.password) {
            setError('Please fill in all fields');
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const user = existingUsers.find(user => user.email === input.email);
        if (!user) {
            setError('Email not found');
            return;
        }

        if (user.password !== input.password) {
            setError('Incorrect password');
            return;
        }

        localStorage.setItem("loggedinUser", JSON.stringify(user));
        localStorage.setItem("loggedin", true);
        navigate("/Home");
    };

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setError(""); 
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle password visibility
    };

    return (
        <div className='min-h-screen'>
            <div className=' bg-left w-full bg-cover overflow-hidden min-h-screen px-12' style={{ backgroundImage: `url(${formbg})` }} id="Header">
                <NavbarForForm />
                <div className="flex justify-end items-center ">
                    <div className="w-full max-w-md rounded-lg shadow-md ">
                        <form className="border-2 rounded-lg border-primary px-8 py-10 bg-[#1f1e24] mt-8" onSubmit={handleSubmit}>
                            <div className="text-center mb-6">
                                <p className="text-2xl text-white uppercase ">Log in</p>
                            </div>
                            {error && <p className="text-red-100 text-center mb-2 ">{error}</p>}
                            <div className="space-y-4">
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your Email"
                                        onChange={handleInputChange}
                                        value={input.email}
                                        className="w-full px-4 py-2 rounded-lg focus:outline-none"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"} // Toggle input type
                                        name="password"
                                        placeholder="Enter your Password"
                                        onChange={handleInputChange}
                                        value={input.password}
                                        className="w-full px-4 py-2 rounded-lg focus:outline-none"
                                    />
                                    <span 
                                        onClick={togglePasswordVisibility} 
                                        className="absolute right-3 top-3 cursor-pointer">
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                                <div className="text-center mt-4">
                                    <p className="text-sm text-white ">
                                        Don't have an account?{" "}
                                        <Link to="/" className="text-primary hover:underline">Sign Up</Link>
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <button type="submit" className="uppercase w-full py-2 bg-primary text-black font-semibold rounded-lg focus:outline-none">
                                        Log in
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
