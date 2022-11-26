import React from "react";
import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link";

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
        {vacations?.items.map((item) => (
          <div className="vacation-panel" key={item.sys.id}>
            <Image
              src={`https:${item.fields.thumbnail.fields.file.url}`}
              width={item.fields.thumbnail.fields.file.details.image.width}
              height={item.fields.thumbnail.fields.file.details.image.height}
              className="vacation-panel__image"
              alt="city thumbnail"
            />
            <h2 className="vacation-panel__title"> {item.fields.title}</h2>
            <h3 className="vacation-panel__date"> {item.fields.date}</h3>
            <Link
              href={`/vacations/${item.fields.slug}`}
              className="btn btn-primary vacation-panel__button"
            >
              Gallery
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Vacations;
