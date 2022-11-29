"use client";

import VacationPanel from "./components/ui/VacationPanel";
import { fetchVacationsClient } from "./components/utils/FetchQueryClient";
import { useState, useEffect } from "react";
import ActionBar from "./components/ui/ActionBar";

const Vacations = () => {
  const { data, isLoading } = fetchVacationsClient();

  const [query, setQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState(data);
  const [sortedCities, setSortedCities] = useState(data);
  const [noVacationFound, setNoVacationFound] = useState(false);

  const inputCity = data?.items.filter((city) =>
    city.fields.title.toLowerCase().includes(query.toLowerCase())
  );

  const newData = data?.items.map((obj) => {
    return { ...obj, fields: {...obj.fields, date: new Date(obj.fields.date)}  };
  });

  let ascending = '';
  let descending = '';

  const setAscending =(arr)=> {
    return [...arr].sort((a,b)=> {
      return Number(b.fields.date) - Number(a.fields.date)
    })
  }

  const setDescending =(arr)=> {
    return [...arr].sort((a,b)=> {
      return Number(a.fields.date) - Number(b.fields.date)
    })
  }


  if ( newData && newData.length) {

  ascending = [...newData].sort(
    (a, b) => Number(a.fields.date) - Number(b.fields.date)
   );

  descending = [...newData].sort(
   (a, b) => Number(b.fields.date) - Number(a.fields.date)
   );
   
  console.log(setAscending(newData))
  console.log(setDescending(newData))
  }


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

    if (inputCity && inputCity.length) {
      setFilteredCities(inputCity);
      setNoVacationFound(false);
    } 
  }, [query, data]);

  if (isLoading) {
    return <div>isLoading</div>;
  }

  console.log(filteredCities)

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
