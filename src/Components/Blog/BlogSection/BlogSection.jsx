import React from 'react';
import { Link } from 'react-router-dom';
import { MdAccessTime } from "react-icons/md";
import { FaRegUser, FaRegThumbsUp, FaRegComments, FaAngleDoubleRight, FaSearch } from "react-icons/fa";
import Pagination from '../../Movie/Pagination/Pagination'

// BlogPost Component
const BlogPost = ({ imgSrc, date, title, description, comments, likes, author, postLink }) => {
    return (
        <div className="mb-12 bg-[#1f1e24]">
            <div className="">
                <Link to={postLink}>
                    <img src={imgSrc} alt="Blog Thumbnail" className="w-full h-full object-cover" />
                </Link>
            </div>
            <div className="p-6 text-[#bcbcbc]">
                <span className="text-md font-medium flex items-center mb-3">
                    <MdAccessTime className='mr-2 text-primary' /> {date}
                </span>
                <h2 className="text-2xl font-bold mb-3">
                    <Link to={postLink} className="transition-all duration-300 hover:text-primary">
                        {title}
                    </Link>
                </h2>
                <p className="text-md font-medium leading-6">
                    {description}
                </p>
                <div className="flex items-center flex-wrap justify-between relative pt-5 mt-6 border-t border-t-gray-600">
                    <ul className="flex space-x-6 text-sm font-medium transition-all duration-300">
                        <li className="flex items-center">
                            <FaRegUser className='mr-2 text-primary' /> by <Link to={postLink} className="hover:text-primary ml-1 "> {author} </Link>
                        </li>
                        <li className="flex items-center">
                            <FaRegThumbsUp className='mr-2 text-primary' /> {likes}
                        </li>
                        <li className="flex items-center">
                            <FaRegComments className='mr-2 text-primary' /> {comments} Comments
                        </li>
                    </ul>
                    <Link to={postLink} className="text-primary flex items-center text-sm font-medium">
                        Read More <FaAngleDoubleRight className='ml-2' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

// BlogSection Component
const BlogSection = () => {
    return (
        <section className=" bg-black py-28" style={{ backgroundImage: "url('../img/bg/blog_bg.jpg')" }}>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    {/* Blog Posts Section */}
                    <div className="lg:w-2/3 w-full pr-8 mb-12 lg:mb-0">

                        {/* Blog Post 1 */}
                        <BlogPost
                            imgSrc="https://movflxx.netlify.app/img/blog/blog_thumb01.jpg"
                            date="10 Mar 2025"
                            title="Your Free Movie Streaming Purposes"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa commodo consequat. Duis aute irure dolor in reprehend ."
                            comments={12}
                            likes={63}
                            author="Admin"
                            postLink="/Blog"
                        />

                        {/* Blog Post 2 */}
                        <BlogPost
                            imgSrc="https://movflxx.netlify.app/img/blog/blog_thumb02.jpg"
                            date="10 Mar 2021"
                            title="Where watch English movies free?"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa commodo consequat. Duis aute irure dolor in reprehend ."
                            comments={12}
                            likes={63}
                            author="Admin"
                            postLink="/Blog"
                        />

                        {/* Blog Post 3 */}
                        {/* <BlogPost
                            imgSrc="https://movflxx.netlify.app/img/blog/blog_thumb03.jpg"
                            date="10 Mar 2021"
                            title="House movie streaming website?"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa commodo consequat. Duis aute irure dolor in reprehend ."
                            comments={12}
                            likes={63}
                            author="Admin"
                            postLink="/Blog"
                        /> */}

                        {/* Pagination */}
                    </div>

                    {/* Sidebar Section */}
                    <div className="lg:w-1/3 w-full mt-12 lg:mt-0">
                        <aside className=" md:ml-7 rounded-lg shadow-lg">
                            {/* Search Widget */}
                            <div className="bg-[#1f1e24] px-7 mb-8 py-10 text-white">
                                <h5 className="text-xl relative mb-10 text-sm font-semibold  before:content-[''] before:absolute before:left-0 before:top-10 before:-translate-y-1/2 before:w-10 before:h-[3px] before:bg-primary before:rounded ">Search Objects</h5>
                                <form className="flex ">
                                    <input type="text" placeholder="Search..." className="w-full bg-[#393939] p-3 rounded-l-md" />
                                    <button type="submit" className="p-5 bg-primary text-black rounded-r-md">
                                        <FaSearch />
                                    </button>
                                </form>
                            </div>

                            {/* Categories Widget */}
                            <div className="bg-[#1f1e24] px-7 mb-8 py-10 text-white">
                                <h5 className="text-xl relative mb-10 text-sm font-semibold  before:content-[''] before:absolute before:left-0 before:top-10 before:-translate-y-1/2 before:w-10 before:h-[3px] before:bg-primary before:rounded ">Categories</h5>
                                <ul className=" font-medium text-sm">
                                    <li className="pb-4 mb-6 border-b border-dashed border-[#59595c]"><Link to={'/Blog'} className="hover:text-primary ">Movies</Link> <span className="float-right">12</span></li>
                                    <li className="pb-4 mb-6 border-b border-dashed border-[#59595c]"><Link to={'/Blog'} className="hover:text-primary">Action Movies</Link> <span className="float-right">10</span></li>
                                    <li className="pb-4 mb-6 border-b border-dashed border-[#59595c]"><Link to={'/Blog'} className="hover:text-primary">Streaming</Link> <span className="float-right">9</span></li>
                                    <li className="pb-4 mb-6 border-b border-dashed border-[#59595c]"><Link to={'/Blog'} className="hover:text-primary">Download</Link> <span className="float-right">16</span></li>
                                </ul>
                            </div>

                            {/* Recent Posts Widget */}
                            <div className="bg-[#1f1e24] px-7 mb-8 py-10 text-white">
                                <h5 className="text-xl relative mb-10 text-sm font-semibold  before:content-[''] before:absolute before:left-0 before:top-10 before:-translate-y-1/2 before:w-10 before:h-[3px] before:bg-primary before:rounded ">Recent Posts</h5>
                                <ul>
                                    <li className="mb-4 flex w-full">
                                        <div className="w-28 h-20 bg-cover bg-center rounded-md" style={{ backgroundImage: "url('https://movflxx.netlify.app/img/blog/rc_post_thumb01.jpg')" }}></div>
                                        <div className="ml-4">
                                            <h6 className="text-medium font-medium">
                                                <a href="/blog-details" className="hover:text-primary">Express Management Effective</a>
                                            </h6>
                                            <span className="text-xs text-gray-500">10 Mar 2021</span>
                                        </div>
                                    </li>
                                    <li className="mb-4 flex">
                                        <div className="w-28 h-20 bg-cover bg-center rounded-md" style={{ backgroundImage: "url('https://movflxx.netlify.app/img/blog/rc_post_thumb02.jpg')" }}></div>
                                        <div className="ml-4">
                                            <h6 className="text-medium font-medium">
                                                <Link to={'/Blog'} className="hover:text-primary">Where watch English movies free?</Link>
                                            </h6>
                                            <span className="text-xs text-gray-500">10 Mar 2021</span>
                                        </div>
                                    </li>
                                    <li className="mb-4 flex ">
                                        <div className="w-28 h-20 bg-cover bg-center rounded-md" style={{ backgroundImage: "url('https://movflxx.netlify.app/img/blog/rc_post_thumb03.jpg')" }}></div>
                                        <div className="ml-4">
                                            <h6 className="text-medium font-medium">
                                                <Link to={"/Bolg"} className="hover:text-primary">House movie streaming website</Link>
                                            </h6>
                                            <span className="text-xs text-gray-500">10 Mar 2021</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Tag Widget */}
                            <div className="bg-[#1f1e24] px-7 mb-8 py-10 text-white">
                                <h5 className="text-xl relative mb-10 text-sm font-semibold  before:content-[''] before:absolute before:left-0 before:top-10 before:-translate-y-1/2 before:w-10 before:h-[3px] before:bg-primary before:rounded ">Tag Post</h5>
                                <div className="flex flex-wrap gap-2 text-sm font-medium items-center">
                                    <Link to={"/Blog"} className="rounded-bl-[15px] rounded-tr-[15px] bg-[#393939] hover:bg-primary hover:text-black py-2 px-4 duration-300 transition-all">Movies</Link>
                                    <Link to={"/Blog"} className="rounded-bl-[15px] rounded-tr-[15px] bg-[#393939] hover:bg-primary hover:text-black py-2 px-4 duration-300 transition-all">Creative</Link>
                                    <Link to={"/Blog"} className="rounded-bl-[15px] rounded-tr-[15px] bg-[#393939] hover:bg-primary hover:text-black py-2 px-4 duration-300 transition-all">News</Link>
                                    <Link to={"/Blog"} className="rounded-bl-[15px] rounded-tr-[15px] bg-[#393939] hover:bg-primary hover:text-black py-2 px-4 duration-300 transition-all">Romantic</Link>
                                    <Link to={"/Blog"} className="rounded-bl-[15px] rounded-tr-[15px] bg-[#393939] hover:bg-primary hover:text-black py-2 px-4 duration-300 transition-all">Who</Link>
                                    <Link to={"/Blog"} className="rounded-bl-[15px] rounded-tr-[15px] bg-[#393939] hover:bg-primary hover:text-black py-2 px-4 duration-300 transition-all">English</Link>
                                    <Link to={"/Blog"} className="rounded-bl-[15px] rounded-tr-[15px] bg-[#393939] hover:bg-primary hover:text-black py-2 px-4 duration-300 transition-all">Blending</Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
                <div className='md:flex mt-0'>
                <Pagination/>

                </div>

            </div>
        </section>
    );
};

export default BlogSection;
