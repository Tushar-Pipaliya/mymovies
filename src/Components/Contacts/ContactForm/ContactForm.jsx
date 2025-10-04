import React from "react";
import pricing_bg from "../../../assets/pricing_bg.jpg";
import { Link } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import map from "../../../assets/map.jpg";



const ContactForm = ({ inputBg, liStyle, btn }) => {
    const inStyle = inputBg || "p-4 bg-[#1f1e24] focus:outline-none focus:ring-1 focus:ring-primary rounded ";
    const finalLiStyle = liStyle || "pb-6 mb-6 border-b border-[#313035] flex items-center";
    const contactsBtn = btn || "mr-3 p-4 bg-primary text-black rounded-full shadow-lg transition-all duration-1000 ease-in-out z-10 smooth";


    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
    };

    return (
        <section
            className="bg-center bg-cover m-h-screen  pt-28 relative"
            style={{ background: `url(${pricing_bg})` }}
        >
            <div>
                <div className="flex flex-wrap px-8">
                    {/* Contact Form Section */}
                    <div className="xl:w-2/3 lg:w-3/4 w-full">
                        <div className="rounded-lg">
                            <div className="mb-12">
                                <h5 className="text-xl font-semibold text-white">
                                    Contact Form
                                </h5>
                            </div>
                            <div className="contact-form text-white">
                                <form onSubmit={handleSubmit} method="post" className="p-8 mr-8 border border-[#313035]">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                aria-label="Your Name"
                                                className={`w-full ${inStyle}`}
                                                placeholder="Your Name *"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                aria-label="Your Email"
                                                className={`w-full ${inStyle}`}
                                                placeholder="Your Email *"
                                            />
                                        </div>
                                    </div>
                                    <input
                                        type="text"
                                        aria-label="Subject"
                                        className={`w-full mt-4 ${inStyle}`}
                                        placeholder="Subject *"
                                    />
                                    <textarea
                                        name="message"
                                        aria-label="Your Message"
                                        className={`w-full mt-4 ${inStyle}`}
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
                        <h5 className="text-xl font-semibold text-white mb-12">Information</h5>
                        <div className="bg-[#1f1e24] p-8 rounded-lg">
                            <div className="text-white">
                                <p className="pb-6 mb-6 border-b border-[#313035]">
                                    <span className="font-semibold">Find solutions:</span> to common problems, or get help from a support agent in the industry.
                                </p>
                                <div className="mt-4">
                                    <ul>
                                        <li className={finalLiStyle}>
                                            <div className={contactsBtn}>
                                                <FaMapMarkerAlt />
                                            </div>
                                            <p>
                                                <span className="font-semibold">Address:</span> W38 Park Road, New York
                                            </p>
                                        </li>
                                        <li className={finalLiStyle}>
                                            <div className={contactsBtn}>
                                                <FaPhoneAlt />
                                            </div>
                                            <p>
                                                <span className="font-semibold">Phone:</span> (09) 123 854 365
                                            </p>
                                        </li>
                                        <li className={finalLiStyle}>
                                            <div className={contactsBtn}>
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
                <div className="pt-28 ">
                    <div className='cursor-pointer bg-center bg-cover h-80  relative'
                        style={{ backgroundImage: `url(${map})` }}
                    >

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
