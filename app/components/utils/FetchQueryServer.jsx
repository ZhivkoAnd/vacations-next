import { createClient } from "contentful";

export const fetchVacationsServer = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const response = await client.getEntries(
    { content_type: "recipe" },
    { next: { revalidate: 1 } }
  );
  return response;
};
