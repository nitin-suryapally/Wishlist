import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, saveUserWatchlists } from "../features/moviesSlice";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

const SearchMovies = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);
  const userEmail = useSelector((state) => state.auth.email);

  const handleSearch = (searchTerm) => {
    dispatch(fetchMovies(searchTerm));
    dispatch(saveUserWatchlists(userEmail));
  };

  return (
    <div className="p-4 w-full">
      <SearchBar onSearch={handleSearch} loading={loading} />

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4 w-full h-[500px] overflow-y-scroll">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchMovies;
