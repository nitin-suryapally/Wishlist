import { BsBookmarkPlusFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="border border-red-400 p-4 md:p-6 rounded-md w-full flex flex-col space-y-4 bg-white">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left">
        Welcome to <span className="text-red-500">Watchlists</span>
      </h1>

      <div className="text-center md:text-left">
        <p className="text-base sm:text-lg md:text-xl">
          Browse movies, add them to watchlists, and share them with friends.
        </p>
        <p className="text-sm sm:text-lg md:text-xl mt-2 flex flex-wrap justify-center md:justify-start items-center">
          Just click the
          <span className="ml-1 mr-1 inline-block bg-gray-200 p-1 rounded">
            <BsBookmarkPlusFill className="h-5 w-5 sm:h-6 sm:w-6" />
          </span>
          to add a movie, the poster to see more details, or
          <span className="ml-1 mr-1 inline-block bg-gray-200 p-1 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          to mark the movie as watched.
        </p>
      </div>
    </div>
  );
};

export default Header;
