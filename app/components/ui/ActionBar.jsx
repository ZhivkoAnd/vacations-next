import React from "react";
import Search from "./Search";
import Filters from "./Filters";

const ActionBar = ({ query, setQuery, sortAscending, sortDescending }) => {
  return (
    <div className="action-bar">
      <Filters sortAscending={sortAscending} sortDescending={sortDescending} />
      <Search query={query} setQuery={setQuery} />
    </div>
  );
};

export default ActionBar;
