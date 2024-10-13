import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  editList,
  removeMovieFromList,
  toggleSeenStatus,
  saveUserWatchlists,
} from "../features/moviesSlice";
import WhishlistCard from "./WhishlistCard";
import { MdSaveAs } from "react-icons/md";


const ListTitleDescription = ({
  listName,
  setListName,
  description,
  setDescription,
  handleEditList,
}) => (
  <div className="mb-4">
    <h1 className="text-xl md:text-2xl font-bold flex items-center mb-2">
      <input
        type="text"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        className="border-2 p-2 rounded w-full md:w-auto"
        placeholder="List Title"
      />
      <button onClick={handleEditList} className="ml-2 p-2">
        <MdSaveAs className="w-6 h-6 md:w-8 md:h-8" />
      </button>
    </h1>

    <div>
      <h2 className="font-semibold text-md md:text-lg mb-1">About this watchlist</h2>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border-2 p-2 rounded"
        placeholder="Add a description"
      />
    </div>
  </div>
);


const MovieGrid = ({ movies, handleRemoveMovie, handleToggleSeen }) => (
  <div>
    <h2 className="text-lg md:text-xl mb-2">Movies in this list:</h2>

  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {movies.map((movie) => (
        <WhishlistCard
          key={movie.id}
          movie={movie}
          onRemove={handleRemoveMovie}
          onToggleSeen={handleToggleSeen}
        />
      ))}
    </div>
  </div>
);


const ListDetails = () => {
  const { listId } = useParams();
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.movies.watchlists[listId]);
  const userEmail = useSelector((state) => state.auth.email);

  const [listName, setListName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (watchlist) {
      setListName(watchlist.listName);
      setDescription(watchlist.description);
    }
  }, [watchlist]);

  const handleEditList = () => {
    dispatch(editList({ listId, listName, description }));
    dispatch(saveUserWatchlists(userEmail));
  };

  const handleRemoveMovie = (movieId) => {
    dispatch(removeMovieFromList({ listId, movieId }));
    dispatch(saveUserWatchlists(userEmail));
  };

  const handleToggleSeen = (movieId, isSeen) => {
    dispatch(toggleSeenStatus({ listId, movieId, isSeen }));
    dispatch(saveUserWatchlists(userEmail));
  };

  if (!watchlist) {
    return <div>Loading list details...</div>;
  }

  return (
    <div className="container mx-auto p-4">
  
      <ListTitleDescription
        listName={listName}
        setListName={setListName}
        description={description}
        setDescription={setDescription}
        handleEditList={handleEditList}
      />

      <MovieGrid
        movies={watchlist.movies}
        handleRemoveMovie={handleRemoveMovie}
        handleToggleSeen={handleToggleSeen}
      />
    </div>
  );
};

export default ListDetails;
