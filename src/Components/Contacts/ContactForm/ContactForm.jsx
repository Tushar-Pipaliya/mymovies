import React from "react";
import pricing_bg from "../../../assets/pricing_bg.jpg";
import { Link } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt, FaPhoneAlt  } from "react-icons/fa";


const ContactForm = ({ inputBg, liStyle }) => {
    const inStyle = inputBg || "bg-[#1f1e24]";
    const finalLiStyle = liStyle || "pb-6 mb-6 border-b border-[#313035] flex items-center";
 

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
    };

    return (
        <section
            className="bg-center bg-cover m-h-screen px-4 relative"
            style={{ background: `url(${pricing_bg})` }}
        >
            <div className="px-8">
                <div className="flex flex-wrap">
                    {/* Contact Form Section */}
                    <div className="xl:w-2/3 lg:w-3/4 w-full">
                        <div className="rounded-lg">
                            <div className="mb-6">
                                <h5 className="text-xl font-semibold text-white">
                                    Contact Form
                                </h5>
                            </div>
                            <div className="contact-form">
                                <form onSubmit={handleSubmit} method="post" className="p-8">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                aria-label="Your Name"
                                                className={`w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${inStyle}`}
                                                placeholder="Your Name *"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                aria-label="Your Email"
                                                className={`w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${inStyle}`}
                                                placeholder="Your Email *"
                                            />
                                        </div>
                                    </div>
                                    <input
                                        type="text"
                                        aria-label="Subject"
                                        className={`w-full mt-4 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${inStyle}`}
                                        placeholder="Subject *"
                                    />
                                    <textarea
                                        name="message"
                                        aria-label="Your Message"
                                        className={`w-full mt-4 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${inStyle}`}
                                        placeholder="Type Your Message..."
                                        rows="5"
                                    ></textarea>
                                    <Link to={'/Home'}>
                                   <button
                                        type="submit"
                                        className={` ${inStyle} mt-4 flex text-base bg-[#1f1e24] font-bold text-[#e3dfdf] px-9 py-4 bg-transparent text-white font-semibold border-2 border-primary rounded-full hover:bg-primary hover:text-black text-sm transition duration-300 uppercase`}
                                    >
                                        Send Message
                                    </button>
                                    </Link>
 
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info Section */}
                    <div className="xl:w-1/3 lg:w-1/4 w-full">
                        <h5 className="text-xl font-semibold text-white mb-6">Information</h5>
                        <div className="bg-[#1f1e24] p-8 rounded-lg">
                            <div className="text-white">
                                <p className="pb-6 mb-6 border-b border-[#313035]">
                                    <span className="font-semibold">Find solutions:</span> to common problems, or get help from a support agent in the industry.
                                </p>
                                <div className="mt-4">
                                    <ul>
                                        <li className={finalLiStyle}>
                                            <div className="mr-3">
                                                <FaMapMarkerAlt/>
                                            </div>
                                            <p>
                                                <span className="font-semibold">Address:</span> W38 Park Road, New York
                                            </p>
                                        </li>
                                        <li className={finalLiStyle}>
                                            <div className="mr-3">
                                                <FaPhoneAlt />
                                            </div>
                                            <p>
                                                <span className="font-semibold">Phone:</span> (09) 123 854 365
                                            </p>
                                        </li>
                                        <li className={finalLiStyle}>
                                            <div className="mr-3">
                                                <IoMdMail />
                                            </div>
                                            <p>
                                                <span className="font-semibold">Email:</span> support@movflx.com
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
