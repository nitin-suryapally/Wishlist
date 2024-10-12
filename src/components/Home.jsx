import React from "react";
import Header from "./Header";
import SearchMovies from "./SearchMovies";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start p-6">
      <Header />
      <div className="text-center mt-6 w-full">
        <SearchMovies />
      </div>
    </div>
  );
};

export default Home;
