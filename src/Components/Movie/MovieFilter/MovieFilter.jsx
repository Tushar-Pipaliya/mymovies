import React, { useState } from "react";

const MovieFilter = () => {
  const [activeFilter, setActiveFilter] = useState("cat-three");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (

    <div className="flex flex-wrap items-end mb-16">
    
      {/* Left Section */}
      <div className="w-full lg:w-1/2">
        <div className="text-center lg:text-left">
          <span className="block text-xl font-medium text-gray-500">ONLINE STREAMING</span>
          <h2 className="text-3xl font-bold text-gray-800">New Release Movies</h2>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
        <div className="flex flex-col items-center lg:items-end">
          <div className="flex space-x-4 mb-4">
            <button
              className={`px-6 py-2 rounded-lg ${activeFilter === "cat-three" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-indigo-500 hover:text-white"}`}
              onClick={() => handleFilterChange("cat-three")}
            >
              Animation
            </button>
            <button
              className={`px-6 py-2 rounded-lg ${activeFilter === "cat-one" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-indigo-500 hover:text-white"}`}
              onClick={() => handleFilterChange("cat-one")}
            >
              Movies
            </button>
            <button
              className={`px-6 py-2 rounded-lg ${activeFilter === "cat-two" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-indigo-500 hover:text-white"}`}
              onClick={() => handleFilterChange("cat-two")}
            >
              Anime
            </button>
          </div>
          <form className="w-full max-w-xs">
            <select
              className="w-full p-3 border rounded-lg bg-white shadow-sm text-gray-800"
              defaultValue="0"
            >
              <option value="0">English</option>
              <option value="1">Blueray</option>
              <option value="2">4k Movie</option>
              <option value="3">Hd Movie</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MovieFilter;
