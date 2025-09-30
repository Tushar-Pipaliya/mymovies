import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarForForm from '../NavbarForForm/NavbarForForm.jsx';

const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // Basic Validation
        if (!input.email || !input.password) {
            setError("Please enter both email and password");
            return;
        }

        // Get all users from localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Find user with matching email
        const loggedInUser = users.find(user => user.email === input.email);

        // Check if user exists and password matches
        if (!loggedInUser) {
            setError("No account found with this email, please sign up first");
            return;
        }

        if (loggedInUser.password === input.password) {
            // Set the logged-in status in localStorage
            localStorage.setItem("loggedin", true);
            localStorage.setItem("loggedinUser", JSON.stringify(loggedInUser));  // Save user details

            // Redirect to home or dashboard
            navigate("/Home");
        } else {
            setError("Wrong password");
        }
    };

    return (

        <div>
        <NavbarForForm/>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                    <form onSubmit={handleLogin}>
                        <div className="text-center mb-6">
                            <p className="text-2xl font-semibold text-gray-700">Log In</p>
                        </div>

                        {/* Error Message Display */}
                        {error && (
                            <div className="text-center mb-4 text-red-500 text-sm">
                                <p>{error}</p>
                            </div>
                        )}

                        <div className="space-y-4">
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your Email"
                                    onChange={(e) => setInput({
                                        ...input,
                                        [e.target.name]: e.target.value,
                                    })}
                                    value={input.email}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your Password"
                                    onChange={(e) => setInput({
                                        ...input,
                                        [e.target.name]: e.target.value,
                                    })}
                                    value={input.password}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="text-center mt-4">
                                <p className="text-sm text-gray-500">
                                    Don't have an account?{" "}
                                    <Link to="/" className="text-blue-600 hover:text-blue-800">Sign Up</Link>
                                </p>
                            </div>
                            <div className="mt-6">
                                <button type="submit" className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    Log In
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
