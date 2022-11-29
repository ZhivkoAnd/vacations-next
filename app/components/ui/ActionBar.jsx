import React from "react";
import Search from "./Search";
import Filters from "./Filters";

const ActionBar = ({
  inputQuery,
  setInputQuery,
  setFilterDateAscending,
  setFilterDateDescending,
}) => {
  return (
    <div className="action-bar">
      <Filters
        setFilterDateAscending={setFilterDateAscending}
        setFilterDateDescending={setFilterDateDescending}
      />
      <Search inputQuery={inputQuery} setInputQuery={setInputQuery} />
    </div>
  );
};

export default ActionBar;
