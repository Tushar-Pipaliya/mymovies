import React from 'react'
import Overviewbg from '../../../assets/Overviewbg.jpg'
import { Link } from 'react-router-dom'
import { BsFillCaretRightFill } from "react-icons/bs";
import Overviewbanner from "../../../assets/Overviewbanner.png"


function Overview() {
    return (
        <div
            className="relative min-h-screen w-full bg-cover bg-[#100e17] opacity-[0.95] py-28"
            style={{ backgroundImage: `url(${Overviewbg})` }}>
            <div>
                <div>
                    <div className='flex flex-col md:flex-row px-4'>
                        <div className='w-full md:w-2/5  px-4'>
                            <div className="  mb-5">
                                <span className="relative pl-14 mb-2 text-sm font-semibold uppercase text-[#656363] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-10 before:h-[3px] before:bg-primary before:rounded ">Our Services</span>
                                <h2 className="text-4xl font-bold text-white mt-3 text-[#1e1b29]">Live Movie & TV Shows For Friends & Family</h2>
                            </div>
                            <div>
                                <p className=' font-medium leading-[2] text-[#6a6a6a]'>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.</p>
                                <div className='flex items-center flex-wrap mt-[30px] mb-6'>
                                    <div className='mr-9 mb-3'>
                                        <h2 className="text-6xl font-bold text-white "
                                            style={{ WebkitTextStroke: '2px #d81c2b' }}
                                        >HD 4K</h2>
                                    </div>
                                    <div>
                                        <h4 className='flex text-4xl font-bold text-[#1e1b29] leading-[0.8] mb-[5px] flex" style="text-shadow: 0px 3px 4px rgba(30, 30, 30, 0.18);'>
                                            <span><div>20K</div></span><span className='font-black'>+</span>
                                        </h4>
                                        <p className='mb-0 text-xl font-bold text-[#1e1b29] leading-1'>Active Customer</p>
                                    </div>
                                </div>
                                <Link   to="https://www.youtube.com/watch?v=9FUd-D4FWjw" target="_blank">
                                    <button className="flex items-center text-base font-bold text-[#e3dfdf] px-9 py-4 bg-primary text-black font-semibold border-2 border-primary rounded-full hover:bg-white hover:text-black text-sm transition duration-300 uppercase">
                                        <BsFillCaretRightFill className=' mr-2 text-base' />
                                        Watch now
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='w-full md:w-3/5 px-4'>
                            <div className=" flex items-end px-4">
                                <img
                                    src={Overviewbanner}
                                    alt="Poster Price"
                                    className="h-50"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview
