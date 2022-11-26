import React from "react";
import VacationPanel from "./components/ui/VacationPanel";
import { fetchVacationsClient } from "./components/utils/FetchQueryClient";

const Vacations = async () => {
  const vacations = await fetchVacationsClient();

  return (
    <>
      <h1 className="title-main">Vacations</h1>
      <div className="vacation-panels">
        {vacations?.items.map((vacation) => (
          <VacationPanel item={vacation} key={vacation.sys.id} />
        ))}
      </div>
    </>
  );
};

export default Vacations;
