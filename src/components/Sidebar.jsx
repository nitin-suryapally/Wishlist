import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { loadUserWatchlists } from "../features/moviesSlice";
import SidebarHeader from "./SidebarHeader";
import Watchlists from "./Watchlists";
import UserProfile from "./UserProfile";

const Sidebar = ({ isSidebaropen, setIsSidebarOpen }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, email } = useSelector((state) => state.auth);
  const watchlists = useSelector((state) => state.movies.watchlists);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(loadUserWatchlists(email));
    }
  }, [isAuthenticated, email, dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleSignIn = () => {
    navigate("/");
  };

  const filteredLists = Object.keys(watchlists).filter((listId) =>
    watchlists[listId].listName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-screen">
      <div
        className={`fixed md:static top-0 bottom-0 left-0 z-40 bg-white border-r-2 p-4 transform ${
          isSidebaropen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col h-full w-72`}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-y-4">
            <SidebarHeader setIsSidebarOpen={setIsSidebarOpen} />

            <div className="mb-4">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-red-300"
              />
            </div>

            <div className="mb-4">
              <button
                className="flex items-center w-full bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => navigate("/home")}
              >
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 3.293l6 6V17a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4H8v4a1 1 0 01-1 1H3a1 1 0 01-1-1v-7.707l6-6a1 1 0 011.414 0zM5 10v6h2v-4a1 1 0 011-1h4a1 1 0 011 1v4h2v-6l-5-5-5 5z" />
                  </svg>
                </span>
                Wishlist
              </button>
            </div>

            <Watchlists
              watchlists={watchlists}
              filteredLists={filteredLists}
              navigate={navigate}
            />
          </div>

          <UserProfile
            isAuthenticated={isAuthenticated}
            handleLogout={handleLogout}
            handleSignIn={handleSignIn}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
