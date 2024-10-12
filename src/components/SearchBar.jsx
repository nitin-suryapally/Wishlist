import React, { useState } from "react";

const SearchBar = ({ onSearch, loading }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      onSearch(searchTerm);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2"
    >
      <input
        type="text"
        className="border border-gray-300 rounded px-4 py-2 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for movies..."
      />
      <button
        type="submit"
        className="bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto"
        disabled={loading}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default SearchBar;
