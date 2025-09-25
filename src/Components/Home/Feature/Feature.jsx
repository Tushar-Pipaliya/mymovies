import React from "react";
import featurebg from "../../../assets/featurebg.jpg";
import posterprice from "../../../assets/posterprice.jpg";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { PiTelevisionBold } from "react-icons/pi";
import { BiSolidCameraMovie } from "react-icons/bi";



function Feature() {
    return (
        <div className="flex items-center">
            <div
                className="relative min-h-screen w-full bg-cover bg-[#100e17] opacity-[0.95] py-28"
                style={{ backgroundImage: `url(${featurebg})` }}
            >
                <div className="flex px-4 items-center">
                    {/* Left Section with Poster */}
                    <div className="md:w-1/2 flex items-end px-4">
                        <img
                            src={posterprice}
                            alt="Poster Price"
                            className="h-50"
                        />

                        <div className="bg-primary uppercase text-[12px] font-medium text-[#14141d] relative bottom-[51px] right-8 rotate-90 py-12 px-11 rounded-[6px] tracking-[5px] flex items-center cursor-pointer">
                            Download
                            <PiDownloadSimpleBold className="!rotate-[270deg] text-2xl" />
                        </div>
                    </div>

                    {/* Feature */}
                    <div className="md:w-1/2 px-4">
                        <div className="pl-10">
                            <div className="pr-24  mb-5">
                                <span className="relative pl-14 mb-2 text-sm font-semibold uppercase text-secondary before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-10 before:h-[3px] before:bg-primary before:rounded ">Our Services</span>
                                <h2 className="text-4xl font-bold text-white mt-3 ">Download Your Shows Watch Offline.</h2>
                            </div>
                            <p className="text-sm font-medium leading-6 text-secondary mb-10">Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some injected humour.</p>
                            <div className="pr-28">
                                <ul>
                                    <li className="flex items-center  cursor-pointer  pb-6 mb-6 border-b border-dashed border-[#38373c]">
                                        <div className="w-[95px] h-[95px] leading-[93px] text-center border border-dashed border-[#e4d804] rounded-full flex-none relative text-[38px] text-white mr-5 z-10 flex items-center justify-center">
                                            <div className="absolute rounded-full transition duration-300 ease-linear opacity hover:bg-primary hover:text-black p-5">
                                                <PiTelevisionBold />
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="text-lg mb-2.5 text-secondary font-bold">Enjoy on Your TV.</h5>
                                            <p className="text-sm font-medium leading-6 text-secondary">Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center  cursor-pointer">
                                        <div className="w-[95px] h-[95px] leading-[93px] text-center border border-dashed border-[#e4d804] rounded-full flex-none relative text-[38px] text-white mr-5 z-10 flex items-center justify-center">
                                            <div className="absolute rounded-full transition duration-300 ease-linear opacity hover:bg-primary hover:text-black p-5">
                                                <BiSolidCameraMovie />
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="text-lg mb-2.5 text-secondary font-bold">Watch Everywhere.</h5>
                                            <p className="text-sm font-medium leading-6 text-secondary">Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;
