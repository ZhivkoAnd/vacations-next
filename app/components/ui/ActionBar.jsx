import React from "react";
import Search from "./Search";
import Filters from "./Filters";

const ActionBar = ({
  query,
  setQuery,
  setFilterDateAscending,
  setFilterDateDescending,
}) => {
  return (
    <div className="action-bar">
      <Filters
        setFilterDateAscending={setFilterDateAscending}
        setFilterDateDescending={setFilterDateDescending}
      />
      <Search query={query} setQuery={setQuery} />
    </div>
  );
};

export default ActionBar;
