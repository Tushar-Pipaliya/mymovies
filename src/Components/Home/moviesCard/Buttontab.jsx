import React from "react";

export default function Buttontab({ label, isActive, onClick }) {
  return (
    <button
      className={`px-8 py-2 rounded-full font-semibold border-2 text-sm transition duration-300
        ${isActive
          ? "bg-primary text-black border-primary"
          : "bg-transparent text-white border-primary hover:bg-primary hover:text-black"
        }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
