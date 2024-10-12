import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieToList,
  createList,
  saveUserWatchlists,
} from "../features/moviesSlice";
import BookmarkButton from "./BookmarkButton";
import BookmarkMenu from "./BookmarkMenu";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const watchlists = useSelector((state) => state.movies.watchlists);
  const userEmail = useSelector((state) => state.auth.email);

  const [showBookmarkMenu, setShowBookmarkMenu] = useState(false);
  const [isCreatingNewList, setIsCreatingNewList] = useState(false);

  const handleBookmarkClick = () => {
    setShowBookmarkMenu(!showBookmarkMenu);
  };

  const handleAddToList = (listId) => {
    dispatch(addMovieToList({ listId, movie }));
    dispatch(saveUserWatchlists(userEmail));
    setShowBookmarkMenu(false);
  };

  const handleCreateNewList = (newListName) => {
    const listId = Date.now().toString();
    dispatch(createList({ listId, listName: newListName, description: "" }));
    dispatch(addMovieToList({ listId, movie }));
    dispatch(saveUserWatchlists(userEmail));
    setIsCreatingNewList(false);
    setShowBookmarkMenu(false);
  };

  return (
    <div className="border rounded relative w-full ">
      <BookmarkButton onClick={handleBookmarkClick} />

      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-64 object-cover sm:h-72 md:h-80"
      />
      <h3 className="text-lg font-semibold mt-2 text-center">{movie.title}</h3>
      <p className="text-gray-600 text-center">{movie.year}</p>
      <p className="text-gray-500 capitalize text-center">{movie.type}</p>

      {showBookmarkMenu && (
        <BookmarkMenu
          watchlists={watchlists}
          onAddToList={handleAddToList}
          onCreateNewList={handleCreateNewList}
          isCreatingNewList={isCreatingNewList}
          setIsCreatingNewList={setIsCreatingNewList}
        />
      )}
    </div>
  );
};

export default MovieCard; // ps no rating was in the data fetched from the OMDb api
