import React, { useState } from "react";

const BookmarkMenu = ({
  watchlists,
  onAddToList,
  onCreateNewList,
  isCreatingNewList,
  setIsCreatingNewList
}) => {
  const [newListName, setNewListName] = useState("");

  const handleCreateNewList = () => {
    if (newListName) {
      onCreateNewList(newListName);
      setNewListName("");
    }
  };

  return (
    <div className="absolute top-8 left-2 bg-white shadow-lg rounded p-2 z-10 w-64">
      <h4 className="font-semibold text-sm">Add to list</h4>
      <ul>
        {Object.keys(watchlists).map((listId) => (
          <li
            key={listId}
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => onAddToList(listId)}
          >
            {watchlists[listId].listName}
          </li>
        ))}
      </ul>

      {!isCreatingNewList && (
        <div
          className="mt-2 text-blue-500 cursor-pointer"
          onClick={() => setIsCreatingNewList(true)}
        >
          Create new list
        </div>
      )}

      {isCreatingNewList && (
        <div className="mt-2">
          <input
            type="text"
            placeholder="New list name"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            className="border rounded p-1 w-full"
          />
          <button
            onClick={handleCreateNewList}
            className="mt-2 bg-blue-500 text-white px-2 py-1 rounded"
          >
            Create and Add
          </button>
        </div>
      )}
    </div>
  );
};

export default BookmarkMenu;
