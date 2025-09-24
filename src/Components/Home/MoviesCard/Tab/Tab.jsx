import React, { useState } from "react";
import { MdAccessTime } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";


function Tab({ title, year, duration, rating, quality, image }) {
  return (
    <div className="overflow-hidden shadow-lg cursor-pointer">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3">
        <div className="text-white font-semibold truncate flex justify-between">
          <h3>{title}</h3>
          <span className="text-primary">{year}</span>
        </div>

        <div className="text-white pt-2 text-xs flex justify-between">
          <div>
            <span className="bg-transparent font-bold border-2 border-white text-primary px-2 pt-[2px] pb-[2px]">
              {quality}
            </span>
          </div>
          <div className="flex gap-3 text-[#bcbcbc] text-sm font-bold">
            <span className="flex items-center">
              <MdAccessTime className="mr-2 text-primary font-bold" />
              {duration} min
            </span>
            <span className="flex items-center">
              <FaThumbsUp className="mr-2 text-primary" />
              {rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
// Categories
const movies = [
  {
    tabName: "TV Show",
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
    tabName: "Documentary",
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
    tabName: "Movies",
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
  {
    tabName: "Sports",
    items: [
      {
        title: "FIFA World Cup",
        year: "2022",
        duration: "120",
        rating: "4.7",
        quality: "HD",
        image: "https://movflxx.netlify.app/img/poster/ucm_poster07.jpg",
      },
    ],
  },
];

// Main Component with Tab Buttons
export default function Show() {
  const [activeTab, setActiveTab] = useState("TV Show");

  return (
    <div className="min-h-screen p-4">
      {/* Title Section */}
      <div className="space-y-8">
        <div className="px-4 md:w-1/2 mb-14">
          <span className="block leading-none text-xs uppercase font-medium relative mb-3 tracking-wide text-primary">
            ONLINE STREAMING
          </span>
          <h2 className="mb-0 text-3xl md:text-4xl text-white font-bold">
            Upcoming Movies
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center justify-center gap-5 mb-10">
          {movies.map((category) => (
            <button
              key={category.tabName}
              className={`px-8 py-2 rounded-full font-semibold border-2 text-sm  transition duration-300
                ${activeTab === category.tabName
                  ? "bg-primary text-black border-primary"
                  : "bg-transparent text-white border-primary hover:bg-primary hover:text-black"
                }`}
              onClick={() => setActiveTab(category.tabName)}
            >
              {category.tabName}
            </button>
          ))}
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies
            .find((cat) => cat.tabName === activeTab)
            ?.items.map((movie, index) => (
              <Tab key={index} {...movie} />
            ))}
        </div>
      </div>
    </div>
  );
}
