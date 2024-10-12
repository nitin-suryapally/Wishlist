import React from "react";
import { IoBookmark } from "react-icons/io5";

const BookmarkButton = ({ onClick }) => {
  return (
    <div
      className="absolute top-2 left-2 cursor-pointer z-10 bg-black p-1 rounded"
      onClick={onClick}
    >
      <IoBookmark className="w-6 h-6 text-white" />
    </div>
  );
};

export default BookmarkButton;
