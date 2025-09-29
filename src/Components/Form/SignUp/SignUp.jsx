import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const userDetail = {
        name: "",
        email: "",
        password: ""
    };

    const [data, setData] = useState(userDetail);
    const navigate = useNavigate();

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validation for empty fields
        if (data.name === "" || data.email === "" || data.password === "") {
            alert("Please Enter Detail!");
        } else {
            // Safely get data from localStorage, or initialize it if it's missing
            const storedData = localStorage.getItem("user");

            // Initialize getData as an empty array if localStorage is empty or if it's invalid
            let getData = [];
            if (storedData) {
                try {
                    getData = JSON.parse(storedData);
                    // Check if it's an array, otherwise default to an empty array
                    if (!Array.isArray(getData)) {
                        getData = [];
                    }
                } catch (e) {
                    // In case of invalid JSON, default to empty array
                    getData = [];
                }
            }

            // Check if the user already exists
            const isUserExist = getData.some(user => user.email === data.email);
            if (isUserExist) {
                alert("User already exists with this email address.");
            } else {
                // Add new user data to the array
                getData.push(data);

                // Save the updated array back to localStorage
                localStorage.setItem("user", JSON.stringify(getData));

                alert("Signup Successfully!");
                navigate("/");
            }
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <form onSubmit={handleSubmit}>
                    <div className="text-center mb-6">
                        <p className="text-2xl font-semibold text-gray-700">Sign Up</p>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your Name"
                                onChange={handleInput}
                                value={data.name}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                                onChange={handleInput}
                                value={data.email}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                                onChange={handleInput}
                                value={data.password}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="text-center mt-4">
                            <p className="text-sm text-gray-500">
                                Already have an account?{" "}
                                <a href="/login" className="text-blue-600 hover:text-blue-800">Login</a>
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
    );
};

export default Signup;
