"use client";

import React from "react";
import VacationPanel from "./components/ui/VacationPanel";
import { fetchVacationsClient } from "./components/utils/FetchQueryClient";

const Vacations = () => {
  const { data } = fetchVacationsClient();

  return (
    <>
      <h1 className="title-main">Vacations</h1>
      <div className="vacation-panels">
        {data?.items.map((vacation) => (
          <VacationPanel item={vacation} key={vacation.sys.id} />
        ))}
      </div>
    </>
  );
};

export default Vacations;
