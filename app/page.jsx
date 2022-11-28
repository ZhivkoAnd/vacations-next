"use client";

import VacationPanel from "./components/ui/VacationPanel";
import { fetchVacationsClient } from "./components/utils/FetchQueryClient";
import { useState, useEffect } from "react";
import ActionBar from "./components/ui/ActionBar";

const Vacations = () => {
  const { data, isLoading } = fetchVacationsClient();

  const [query, setQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState(data);
  const [noVacationFound, setNoVacationFound] = useState(false);

  const inputCity = data?.items.filter((city) =>
    city.fields.title.toLowerCase().includes(query.toLowerCase())
  );

  const ascending = data?.items
    .map((item) => item.fields.date)
    .sort((a, b) => new Date(a) - new Date(b));

  const descending = data?.items
    .map((item) => item.fields.date)
    .sort((a, b) => new Date(b) - new Date(a));

  console.log(ascending);
  console.log(descending);

  const sortAscending = () => {
    setFilteredCities(ascending);
  };

  const sortDescending = () => {
    setFilteredCities(descending);
  };

  useEffect(() => {
    if (inputCity && inputCity.length) {
      setFilteredCities(inputCity);
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
