import React from "react";
import Image from "next/image";
import Link from "next/link";

const VacationPanel = ({ item }) => {
  return (
    <div className="vacation-panel">
      <Image
        src={`https:${item.fields.thumbnail.fields.file.url}`}
        width={item.fields.thumbnail.fields.file.details.image.width}
        height={item.fields.thumbnail.fields.file.details.image.height}
        className="vacation-panel__image"
        alt="city thumbnail"
      />
      <h2 className="vacation-panel__title"> {item.fields.title}</h2>
      <h3 className="vacation-panel__date">
        {item.fields.date.toString().slice(4, 15)}
      </h3>
      <Link
        href={`/${item.fields.slug}`}
        className="btn btn-primary vacation-panel__button"
      >
        Gallery
      </Link>
    </div>
  );
};

export default VacationPanel;
