import React from "react";

export async function generateStaticParams() {
  const client = createClient({
    space: "6yu8mnoa9wdc",
    accessToken: "qSxY7HTMgBYn3WQP4bL5svs27iUAQZEM-rauSvhvixg",
  });

  const response = await client.getEntries(
    { content_type: "recipe" },
    { next: { revalidate: 1 } }
  );
  return response;
}

const Vacations = () => {
  return <div>Vacations</div>;
};

export default Vacations;
