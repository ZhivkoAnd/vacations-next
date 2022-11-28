import React from "react";
import Search from "./Search";
import Filters from "./Filters";

const ActionBar = ({ query, setQuery }) => {
  return (
    <div className="action-bar">
      <Filters />
      <Search query={query} setQuery={setQuery} />
    </div>
  );
};

export default ActionBar;
