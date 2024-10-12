import React, { useState } from "react";

const ActionButton = ({ label, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      className={`p-1 rounded text-white z-20 ${color}`}
    >
      {label}
    </button>
  );
};

const MoviePoster = ({ poster, title }) => {
  return (
    <img src={poster} alt={title} className="mb-2 w-full object-cover h-64" />
  );
};

const WhishlistCard = ({ movie, onRemove, onToggleSeen }) => {
  const [isSeen, setIsSeen] = useState(movie.seen);

  const handleToggleSeen = () => {
    const newSeenStatus = !isSeen;
    setIsSeen(newSeenStatus);
    onToggleSeen(movie.id, newSeenStatus);
  };

  return (
    <div className="relative border p-2 rounded shadow-lg max-w-xs mx-auto w-full">
      {isSeen && (
        <div className="absolute inset-0 bg-black bg-opacity-60 text-white flex items-center justify-center z-10">
          <p>Seen</p>
        </div>
      )}

      <MoviePoster poster={movie.poster} title={movie.title} />

      <h3 className="text-lg font-semibold">
        {movie.title} ({movie.year})
      </h3>

      <div className="mt-2 flex justify-between">
        <ActionButton
          label="Remove"
          onClick={() => onRemove(movie.id)}
          color="bg-red-500"
        />

        <ActionButton
          label={isSeen ? "Mark as Unseen" : "Mark as Seen"}
          onClick={handleToggleSeen}
          color={isSeen ? "bg-gray-400" : "bg-green-500"}
        />
      </div>
    </div>
  );
};

export default WhishlistCard;
