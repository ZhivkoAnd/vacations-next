"use client";

import VacationPanel from "./components/ui/VacationPanel";
import { fetchVacationsClient } from "./components/utils/FetchQueryClient";
import { useState, useEffect } from "react";
import {
  setFilterDateAscending,
  setFilterDateDescending,
} from "./components/utils/FilterFunctions";
import ActionBar from "./components/ui/ActionBar";

const Vacations = () => {
  const { data, isLoading } = fetchVacationsClient();

  const [query, setQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState(data);
  const [noVacationFound, setNoVacationFound] = useState(false);

  const modifiedDateData = data?.items.map((obj) => {
    return {
      ...obj,
      fields: { ...obj.fields, date: new Date(obj.fields.date) },
    };
  });

  const inputQuery = modifiedDateData?.filter((city) =>
    city.fields.title.toLowerCase().includes(query.toLowerCase())
  );

  const sortAscending = () => {
    if (inputQuery && inputQuery.length) {
      setFilteredCities(setFilterDateAscending(inputQuery));
    } else {
      setFilteredCities(inputQuery);
    }
  };

  const sortDescending = () => {
    if (inputQuery && inputQuery.length) {
      setFilteredCities(setFilterDateDescending(inputQuery));
    } else {
      setFilteredCities(inputQuery);
    }
  };

  useEffect(() => {
    if (inputQuery && inputQuery.length) {
      setFilteredCities(inputQuery);
      setNoVacationFound(false);
    } else {
      setFilteredCities([]);
      setNoVacationFound(true);
    }
  }, [query, data]);

  if (isLoading) {
    return <div>isLoading</div>;
  }

  return (
    <>
      <ActionBar
        query={query}
        setQuery={setQuery}
        sortAscending={sortAscending}
        sortDescending={sortDescending}
      />
      {noVacationFound ? <div>NOTHING HERE</div> : ""}
      <div className="vacation-panels">
        {filteredCities?.map((vacation) => (
          <VacationPanel item={vacation} key={vacation.sys.id} />
        ))}
      </div>
    </>
  );
};

export default Vacations;
