import React, { useState } from "react";

const UserProfile = ({ isAuthenticated, handleLogout, handleSignIn }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex items-center border-[2px] relative w-full justify-between px-2 py-1 rounded-md">
      <div className="flex items-center">
        {isAuthenticated ? (
          <img
            src="/profile-pic.jpeg"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 12a5 5 0 100-10 5 5 0 000 10zM2 21a10 10 0 1120 0H2z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        )}
        <span className="ml-2">
          {isAuthenticated ? "nitin" : "GUEST"}
        </span>
      </div>

      <div>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="ml-4 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6h.01M12 12h.01M12 18h.01"
            />
          </svg>
        </button>

        {showDropdown && (
          <div className="absolute -top-2 right-0 w-32 bg-white border rounded shadow-lg">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={handleSignIn}
                className="w-full text-left px-4 py-2 text-blue-600 hover:bg-gray-100"
              >
                Sign In
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
