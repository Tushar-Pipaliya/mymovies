import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();

    const handleInput = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email === "" || password === "") {
            alert("Please Enter Details!");
        } else {
            // Retrieve data from localStorage and parse it safely
            let getDetails = JSON.parse(localStorage.getItem("user"));

            // Ensure getDetails is an array or set to an empty array if not
            if (!Array.isArray(getDetails)) {
                getDetails = []; // Default to empty array if it's not valid
            }

            // Check if the array is empty
            if (getDetails.length > 0) {
                const user = getDetails.find(curValue => curValue.email === email && curValue.password === password);

                if (user) {
                    alert("Login Successfully!");
                    navigate("/");
                } else {
                    setMsg("Invalid Email or Password!");
                }
            } else {
                setMsg("No registered users found.");
            }
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <form onSubmit={handleSubmit}>
                    <div className="text-center mb-6">
                        <p className="text-2xl font-semibold text-gray-700">Log In</p>
                    </div>

                    {msg && (
                        <div className="text-center mb-4 text-red-500 text-sm">
                            <p>{msg}</p>
                        </div>
                    )}

                    <div className="space-y-4">
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                                onChange={handleInput}
                                value={email}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                                onChange={handleInput}
                                value={password}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="text-center mt-4">
                            <p className="text-sm text-gray-500">
                                Don't have an account?{" "}
                                <a href="/signup" className="text-blue-600 hover:text-blue-800">Sign Up</a>
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
    );
};

export default Login;
