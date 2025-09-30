import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarForForm from '../NavbarForForm/NavbarForForm.jsx'
import formbg from '../../../assets/formbg.jpg';

const Signup = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Clear previous errors before validation
        setError("");

        // Check if any input is empty
        if (!input.name || !input.email || !input.password) {
            setError('Please fill in all fields');
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        // Check if the email already exists
        const emailExists = existingUsers.some(user => user.email === input.email);
        if (emailExists) {
            setError('Email already exists');
            return;
        }

        // Add new user to the list
        existingUsers.push(input);
        localStorage.setItem("users", JSON.stringify(existingUsers));

        // Set the logged-in user in localStorage
        localStorage.setItem("loggedinUser", JSON.stringify(input)); // Save the new user data
        localStorage.setItem("loggedin", true); // Mark as logged in

        // Redirect to home page after successful sign-up
        navigate("/Home");
    };

    // Clear error message when the user starts typing
    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setError("");  // Clear the error when user starts typing
    };

    return (
        <div       className='min-h-screen bg-left w-full bg-cover overflow-hidden'
      style={{ backgroundImage: `url(${formbg})` }}
      id="Header">>
        <NavbarForForm/>
            <div className="flex justify-center items-center min-h-screen   ">
                <div className="w-full max-w-md   rounded-lg shadow-md">
                    <form className="border-2 p-8" onSubmit={handleSubmit}>
                        <div className="text-center mb-6">
                            <p className="text-2xl font-semibold text-gray-700">Sign Up</p>
                        </div>

                        {/* Error Message Display */}
                        {error && <p className="text-red-500 text-center">{error}</p>}

                        <div className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Enter your Name"
                                    name="name"
                                    onChange={handleInputChange}
                                    value={input.name}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your Email"
                                    onChange={handleInputChange}
                                    value={input.email}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your Password"
                                    onChange={handleInputChange}
                                    value={input.password}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="text-center mt-4">
                                <p className="text-sm text-gray-500">
                                    Already have an account?{" "}
                                    <Link to="/login" className="text-blue-600 hover:text-blue-800">Login</Link>
                                </p>
                            </div>
                            <div className="mt-6">
                                <button type="submit" className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
