import React from "react";

export default function Buttontab({ label, isActive, onClick }) {
  return (
    <button
      className={`px-6  font-semibold text-sm transition duration-300
        ${isActive
          ? "text-white border-primary border-l-[2px] border-r-[2px]"
          : "bg-transparent text-[#cdcaca] border-primary  "
        }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
