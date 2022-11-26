import React from "react";
import { createClient } from "contentful";
import VacationPanel from "./components/ui/VacationPanel";

const fetchVacations = async () => {
  const client = createClient({
    space: "6yu8mnoa9wdc",
    accessToken: "qSxY7HTMgBYn3WQP4bL5svs27iUAQZEM-rauSvhvixg",
  });

  const response = await client.getEntries(
    { content_type: "recipe" },
    { next: { revalidate: 1 } }
  );
  return response;
};

const Vacations = async () => {
  const vacations = await fetchVacations();

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
