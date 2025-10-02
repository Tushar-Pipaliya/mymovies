import React from 'react';
import pricing_bg from '../../../assets/pricing_bg.jpg';
import { FaCheck } from "react-icons/fa";


const PricingMain = () => {
    return (
        <section
            className="bg-center bg-cover relative"
            style={{ backgroundImage: `url(${pricing_bg})` }}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-center mb-16">
                    <div className="text-center max-w-xl">
                        <span className="text-gray-500 font-semibold text-sm mb-2 block">Our Pricing Plans</span>
                        <h2 className="text-3xl font-bold text-white">Our Pricing Strategy</h2>
                    </div>
                </div>

                {/* Flex to Grid for responsiveness */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    {/* Premium Plan */}
                    <div className="w-full max-w-xs">
                        <div className="bg-white rounded-lg shadow-lg mb-8">
                            <div className="p-6 border-b">
                                <h6 className="text-xl font-semibold text-gray-800">Premium</h6>
                                <div className="text-4xl font-bold text-gray-800">
                                    <h3>$7.99</h3>
                                </div>
                                <span className="text-gray-500">Monthly</span>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <FaCheck className="fas fa-check text-green-500 mr-2" /> Video Quality: <span className="ml-auto">Good</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i> Resolution: <span className="ml-auto">480p</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i> Screens you can watch: <span className="ml-auto">1</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i> Cancel Anytime
                                    </li>
                                </ul>
                            </div>
                            <div className="px-6 pb-6">
                                <a href="/#" className="btn bg-blue-500 text-white py-2 px-6 rounded-full w-full">Buy Now</a>
                            </div>
                        </div>
                    </div>

                    {/* Standard Plan */}
                    <div className="w-full max-w-xs text-white">
                        <div className="bg-[#1f1e24] rounded-lg shadow-lg p-10 border-2 border-primary">
                            <h6 className="text-sm uppercase font-bold">Standard</h6>
                            <div className="py-4 px-6 rounded-lg  bg-primary m-auto mt-5 w-fit">
                                <div className="text-3xl font-bold text-gray-800">
                                    <h4>$9.99</h4>
                                </div>
                                <span className="text-gray-500">Monthly</span>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i> Video Quality: <span className="ml-auto">Better</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i> Resolution: <span className="ml-auto">1080p</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i> Screens you can watch: <span className="ml-auto">2</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i> Cancel Anytime
                                    </li>
                                </ul>
                            </div>
                            <div className="px-6 pb-6">
                                <a href="/#" className="btn bg-blue-500 text-white py-2 px-6 rounded-full w-full">Buy Now</a>
                            </div>
                        </div>
                    </div>

                    {/* Premium Plan 4K */}
                    <div className="w-full max-w-xs">
                        <div className="bg-white rounded-lg shadow-lg mb-8">
                            <div className="p-6  border-b">
                                <h6 className="text-xl font-semibold text-gray-800">Premium</h6>
                                <div className="text-4xl font-bold text-gray-800">
                                    <h3>$11.99</h3>
                                </div>
                                <span className="text-gray-500">Monthly</span>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i> Video Quality: <span className="ml-auto">Best</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i> Resolution: <span className="ml-auto">4K+HDR</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i> Screens you can watch: <span className="ml-auto">4</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i> Cancel Anytime
                                    </li>
                                </ul>
                            </div>
                            <div className="px-6 pb-6">
                                <a href="/#" className="btn bg-blue-500 text-white py-2 px-6 rounded-full w-full">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingMain;
