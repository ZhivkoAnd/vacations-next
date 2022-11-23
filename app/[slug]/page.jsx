import Link from "next/link";
import React from "react";

const Vacations = async ({ params: { vacations } }) => {
  return (
    <div>
      Vacations<Link href="/">{vacations}</Link>
    </div>
  );
};

export default Vacations;
