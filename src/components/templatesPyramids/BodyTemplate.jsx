import React, { useContext } from "react";
import { getLocalStorage } from "../../utils/getLocalStorage";
import GlobalContext from "../../utils/GlobalContext";
import Pyramid from "./Pyramid";
import TableCategories from "./TableCategories";
import TablePositions from "./TablePositions";

export default function BodyTemplate( ) {
  const context = useContext(GlobalContext);
  return (
    <details
  id="capture"
      className="p-3 w-full bg-white"
    >
      <h3 className="text-gray-700 text-center text-xl w-full font-bold my-7 p-2">
        CODIGO {context.keyNameNow}
      </h3>
      <div className="flex items-center justify-between px-5">
        <h2 className="bg-gray-300 py-1 px-7 rounded-lg">{context.nameEvent || getLocalStorage("nameEvent")}</h2>

        <TableCategories />
      </div>
      <summary className="text-bluePrimary py-2 font-semibold bg-gray-500/25 max-w-md rounded-lg px-4 text-md hover:text-blueSecondary focus:outline-none focus:text-blue-500 transition duration-150 ease-in">
        Pirámide de {context.typePyramid} Competidores
      </summary>
      <div className="py-2">
        <Pyramid typePyramid={context.typePyramid} />
      </div>

      {/* <TablePositions /> */}
    </details>
  );
}
