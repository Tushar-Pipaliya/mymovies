import React, { useState } from "react";
import Card from "../moviesData/Card.jsx";
import Buttontab from "./Buttontab.jsx";

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


export default function Show() {
  const [activeTab, setActiveTab] = useState("TV Show");

  return (
    <div className="min-h-screen p-4 space-y-8">
      {/* Tab Buttons */}
      <div className="flex items-center justify-center gap-5 mb-10">
        {movies.map((category) => (
          <Buttontab
            key={category.tabName}
            label={category.tabName}
            isActive={activeTab === category.tabName}
            onClick={() => setActiveTab(category.tabName)}
          />
        ))}
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies
          .find((cat) => cat.tabName === activeTab)
          ?.items.map((movie, index) => (
            <Card key={index} {...movie} />
          ))}
      </div>
    </div>
  );
}
