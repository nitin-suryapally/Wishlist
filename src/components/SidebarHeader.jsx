import React from "react";

const SidebarHeader = ({ setIsSidebarOpen }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Watchlists</h1>
      <button
        onClick={() => setIsSidebarOpen(false)}
        className="focus:outline-none md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-500"
          fill="red"
          viewBox="0 0 32 32"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default SidebarHeader;
