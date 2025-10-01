  import React, { useState } from "react";
  import { MdAccessTime } from "react-icons/md";
  import { FaThumbsUp } from "react-icons/fa";
  import Pagination from "../Movie/Pagination/Pagination";

  const MovieGridWithFilter = () => {
    const [activeFilter, setActiveFilter] = useState("Animation");

    const movies = [
      {
        tabName: "Animation",
        items: [
          {
            title: "Women's Day",
            year: "2025",
            duration: "150",
            rating: "3.5",
            quality: "HD",
            image: "https://movflxx.netlify.app/img/poster/ucm_poster01.jpg",
          },
          {
            title: "The Perfect Match",
            year: "2022",
            duration: "128",
            rating: "4.0",
            quality: "2K",
            image: "https://movflxx.netlify.app/img/poster/ucm_poster02.jpg",
          },
          {
            title: "The Dog Woof",
            year: "2025",
            duration: "120",
            rating: "4.2",
            quality: "4K",
            image: "https://movflxx.netlify.app/img/poster/ucm_poster03.jpg",
          },
          {
            title: "The Easy Reach",
            year: "2021",
            duration: "128",
            rating: "3.8",
            quality: "4K",
            image: "https://movflxx.netlify.app/img/poster/ucm_poster04.jpg",
          },
          {
            title: "Adventure Land",
            year: "2023",
            duration: "140",
            rating: "4.5",
            quality: "HD",
            image: "https://movflxx.netlify.app/img/poster/ucm_poster05.jpg",
          },
          {
            title: "Love & Life",
            year: "2020",
            duration: "115",
            rating: "3.9",
            quality: "2K",
            image: "https://movflxx.netlify.app/img/poster/ucm_poster06.jpg",
          },
          {
            title: "Ocean Mystery",
            year: "2019",
            duration: "132",
            rating: "4.1",
            quality: "HD",
            image: "https://movflxx.netlify.app/img/poster/ucm_poster07.jpg",
          },
          {
            title: "Future World",
            year: "2024",
            duration: "150",
            rating: "4.7",
            quality: "4K",
            image: "https://movflxx.netlify.app/img/poster/ucm_poster08.jpg",
          },
        ],
      },
      {
        tabName: "Movies",
        items: [
          {
            title: "Planet Earth",
            year: "2018",
            duration: "95",
            rating: "4.6",
            quality: "HD",
            image: "https://movflxx.netlify.app/img/poster/ucm_poster09.jpg",
          },
          {
            title: "Deep Ocean",
            year: "2020",
            duration: "110",
            rating: "4.3",
            quality: "2K",
            image: "https://movflxx.netlify.app/img/poster/ucm_poster10.jpg",
          },
        ],
      },
      {
        tabName: "Anime",
        items: [
          {
            title: "Adventure Land",
            year: "2023",
            duration: "140",
            rating: "4.5",
            quality: "HD",
            image: "https://movflxx.netlify.app/img/poster/ucm_poster05.jpg",
          },
          {
            title: "Love & Life",
            year: "2020",
            duration: "115",
            rating: "3.9",
            quality: "2K",
            image: "https://movflxx.netlify.app/img/poster/ucm_poster06.jpg",
          },
          {
            title: "Avengers Assemble",
            year: "2019",
            duration: "180",
            rating: "4.8",
            quality: "4K",
            image: "https://movflxx.netlify.app/img/poster/ucm_poster05.jpg",
          },
        ],
      },
    ];

    const handleFilterChange = (filter) => {
      setActiveFilter(filter);
    };

    const filteredMovies = movies.find(
      (category) => category.tabName === activeFilter
    )?.items || [];

    return (
      <section className=" px-8 py-28 bg-black">
        {/* Filter and Title Section */}
        <div className="flex flex-wrap items-end mb-16">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <div className="text-center lg:text-left">
              <span className="block leading-none text-xs uppercase font-medium relative mb-3 tracking-wide text-primary">
                ONLINE STREAMING
              </span>
              <h2 className="mb-0 text-3xl md:text-4xl text-white font-bold">
                New Release Movies
              </h2>
            </div>
          </div>

          {/* Right Section with Category Buttons */}
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <div className="flex flex-col items-center lg:items-end">
              <div className="flex space-x-4 mb-4">
                {movies.map((category) => (
                  <button
                    key={category.tabName}
                    className={`px-8 py-2 rounded-full text-white  font-semibold border-2 text-sm transition duration-300 {
                      ${activeFilter === category.tabName}
                        ? "bg-primary  border-primary"
                        : "bg-transparent border-primary hover:text-black hover:bg-primary "
                    }`}
                    onClick={() => handleFilterChange(category.tabName)}
                  >
                    {category.tabName}
                  </button>
                ))}
                <form className=" max-w-xs text-balck ">
                <select className="px-8 py-2 rounded-full font-semibold border-primary focus:outline-none border-2 text-sm transition cursor-pointer  duration-300 bg-transparent text-white">
                  <option value="0" className="text-black">English</option>
                  <option value="1" className="text-black">Blueray</option>
                  <option value="2" className="text-black">4k Movie</option>
                  <option value="3" className="text-black">Hd Movie</option>
                </select>
              </form>
              </div>

            </div>
          </div>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredMovies.map((movie) => (
            <div key={movie.title} className="overflow-hidden shadow-lg cursor-pointer">
              <div className="relative">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover rounded hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <div className="text-white font-semibold truncate flex justify-between">
                  <h3>{movie.title}</h3>
                  <span className="text-primary">{movie.year}</span>
                </div>

                <div className="text-white pt-2 text-xs flex justify-between">
                  <div>
                    <span className="bg-transparent font-bold border-2 border-white text-primary px-2 py-[2px]">
                      {movie.quality}
                    </span>
                  </div>
                  <div className="flex gap-3 text-[#bcbcbc] text-sm font-bold">
                    <span className="flex items-center">
                      <MdAccessTime className="mr-2 text-primary" />
                      {movie.duration} min
                    </span>
                    <span className="flex items-center">
                      <FaThumbsUp className="mr-2 text-primary" />
                      {movie.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination/>
      </section>
    );
  };

  export default MovieGridWithFilter;
