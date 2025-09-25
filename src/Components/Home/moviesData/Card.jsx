import React from "react";
import { MdAccessTime } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";

export default function Card({ title, year, duration, rating, quality, image }) {
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
            <span className="bg-transparent font-bold border-2 border-white text-primary px-2 py-[2px]">
              {quality}
            </span>
          </div>
          <div className="flex gap-3 text-[#bcbcbc] text-sm font-bold">
            <span className="flex items-center">
              <MdAccessTime className="mr-2 text-primary" />
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
