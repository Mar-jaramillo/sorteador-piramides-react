import React from "react";
import Pyramid from "./Pyramid";
import TableCategories from "./TableCategories";
import TablePositions from "./TablePositions";

export default function BodyTemplate({ typePyramid }) {
  return (
    <div
      id="capture"
      className="grid place-content-center rounded-b-md bg-white  mb-7"
    >
      <details>
        <summary>
       Expandir piramide
        </summary>
        <Pyramid typePyramid={typePyramid} />
      </details>
      <div className="flex  justify-between px-12 mb-10 items-center w-full">
        <TablePositions />
        <TableCategories />
      </div>
    </div>
  );
}
