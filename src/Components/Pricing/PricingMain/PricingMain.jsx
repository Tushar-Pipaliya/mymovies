import React from 'react';
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import pricing_bg from '../../../assets/pricing_bg.jpg'; // Assuming the image path is correct

// PricingCard component - receives props for each pricing plan
const PricingCard = ({ title, price, resolution, icon, quality, screens, buttonText, link, bgColor, textColor, borderColor }) => {
    return (
        <div className={`w-full max-w-xs ${textColor}`}>
            <div className=''>
                <div className={`bg-[#1f1e24] rounded-lg shadow-lg p-10 border-2 ${borderColor}`}>
                    {/* Plan Title */}
                    <h6 className="text-sm uppercase font-bold">{title}</h6>

                    {/* Price Section */}
                    <div className="py-4 px-6 rounded-lg bg-primary m-auto mt-5 w-fit">
                        <div className="font-bold text-[#14141d]">
                            <h4 className='text-3xl'>{price}</h4>
                            <h6>Monthly</h6>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="my-10">
                        <ul className="space-y-6">
                            {/* Video Quality */}
                            <li className="flex items-center pb-4 mb-6 border-b border-[#414146] text-xs font-bold">
                                <span className='mr-2'>{icon}</span> Video Quality: <span className="ml-auto text-primary">{quality}</span>
                            </li>

                            {/* Resolution */}
                            <li className="flex items-center pb-4 mb-6 border-b border-[#414146] text-xs font-bold">
                                <span className='mr-2'>{icon}</span>  Resolution: <span className="ml-auto">{resolution}</span>
                            </li>

                            {/* Screens Available */}
                            <li className="flex items-center pb-4 mb-6 border-b border-[#414146] text-xs font-bold">
                                <span className='mr-2'>{icon}</span> Screens you can watch: <span className="ml-auto">{screens}</span>
                            </li>

                            {/* Cancel Anytime */}
                            <li className="flex items-center pb-4 mb-6 border-b border-[#414146] text-xs font-bold">
                                <span className='mr-2'>{icon}</span> Cancel Anytime
                            </li>
                        </ul>
                    </div>

                    {/* Buy Now Button */}
                    <div className="py-">
                        <Link
                            to={link}
                            className="px-8 py-2 bg-transparent text-white font-semibold border-2 border-primary rounded-full hover:bg-primary hover:text-black text-sm transition duration-300 "
                        >
                            {buttonText}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

// PricingSection component - handles the layout and passes props to PricingCard
const PricingSection = () => {
    const plans = [
        {
            title: "Premium",
            price: "$7.99",
            resolution: "480p",
            quality: "Good",
            screens: "1",
            buttonText: "Buy Now",
            link: "/#",
            bgColor: "bg-white",
            textColor: "text-white",
            borderColor: "border-[#1f1e24] hover:border-primary transition-all duration-300 ease-linear",
            icon: <FaCheck />
        },
        {
            title: "Standard",
            price: "$9.99",
            resolution: "1080p",
            quality: "Better",
            screens: "2",
            buttonText: "Buy Now",
            link: "/Home",
            bgColor: "bg-[#1f1e24]",
            textColor: "text-white",
            borderColor: "border-2 border-primary",
            icon: <FaCheck />
        },
        {
            title: "Premium",
            price: "$11.99",
            resolution: "4K+HDR",
            quality: "Best",
            screens: "4",
            buttonText: "Buy Now",
            link: "/#",
            bgColor: "bg-[#1f1e24]",
            textColor: "text-white",
            borderColor: "border-[#1f1e24] hover:border-primary transition-all duration-300 ease-linear",
            icon: <FaCheck />
        }
    ];

    return (
        <section
            className="bg-center bg-cover relative pt-32 pb-24"
            style={{ backgroundImage: `url(${pricing_bg})` }}
        >
            <div className=" px-8">
                <div className="flex justify-center mb-16">
                    <div className="text-center max-w-xl">
                        <span className="text-[#bcbcbc] font-bold text-sm uppercase mb-2 block">Our Pricing Plans</span>
                        <h2 className="text-3xl font-bold text-white">Our Pricing Strategy</h2>
                        <span></span>
                    </div>
                </div>

                {/* Grid layout for pricing cards */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center place-items-center">
                    {/* Map through plans and render PricingCard for each */}
                    {plans.map((plan, index) => (
                        <PricingCard key={index} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
