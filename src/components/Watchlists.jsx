import React from "react";

const Watchlists = ({ watchlists, filteredLists, navigate }) => {
  return (
    <div>
      <h2 className="text-xl mb-2">My Lists</h2>
      <ul className="space-y-2">
        {filteredLists.length > 0 ? (
          filteredLists.map((listId) => (
            <li
              key={listId}
              className="cursor-pointer p-2 border rounded-md hover:bg-gray-100"
              onClick={() => navigate(`/lists/${listId}`)}
            >
              {watchlists[listId].listName}
            </li>
          ))
        ) : (
          <p className="text-gray-500">No lists found.</p>
        )}
      </ul>
    </div>
  );
};

export default Watchlists;
