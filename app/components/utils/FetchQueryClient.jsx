import { createClient } from "contentful";
import { useQuery } from "react-query";

const fetchQuery = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const responce = await client.getEntries({ content_type: "recipe" });
  return responce;
};

export const fetchVacationsClient = () => {
  return useQuery(["vacations"], fetchQuery);
};
