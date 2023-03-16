import React from "react";
import Pyramid from "./Pyramid";
import TableCategories from "./TableCategories";
import TablePositions from "./TablePositions";

export default function BodyTemplate({ typePyramid }) {
  return (
    <div
      id="capture"
      className="grid place-content-center rounded-2xl bg-white p-7 mb-7"
    >
      <details className="">
        <summary className="text-bluePrimary py-2 font-semibold bg-gray-300/50 w-96 rounded-lg px-4 text-lg hover:text-blueSecondary focus:outline-none focus:text-blue-500 transition duration-150 ease-in">
         Presione aquí para expandir pirámide {typePyramid}
        </summary>
        <div className="py-2">
          <Pyramid typePyramid={typePyramid} />
        </div>
        
      </details>

      <div className="flex  justify-between px-12 mb-10 items-center w-full">
        <TablePositions />
        <TableCategories />
      </div>
    </div>
  );
}
