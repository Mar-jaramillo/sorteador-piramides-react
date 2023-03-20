import React from "react";
import Pyramid from "./Pyramid";
import TableCategories from "./TableCategories";
import TablePositions from "./TablePositions";

export default function BodyTemplate({ typePyramid }) {
  return (
    <details
      id="capture"
      className="  max-w-96 rounded-2xl  bg-white p-10 mb-7"
    >
      <h3 className="text-gray-700 text-center text-xl font-bold my-6">CODIGO DSLDASLÑDKSD</h3>
      <summary className="text-bluePrimary py-2 font-semibold bg-gray-300/50 max-w-md rounded-lg px-4 text-lg hover:text-blueSecondary focus:outline-none focus:text-blue-500 transition duration-150 ease-in">
        Pirámide de {typePyramid} Competidores
      </summary>
      <div className="py-2">
        <Pyramid typePyramid={typePyramid} />
      </div>
      <div className="flex  justify-between px-12 mb-10 items-center w-full">
        <TablePositions />
        <TableCategories />
      </div>
    </details>
  );
}
