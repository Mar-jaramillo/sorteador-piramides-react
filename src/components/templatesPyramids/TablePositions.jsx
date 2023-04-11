import React, { useContext } from "react";
import GlobalContext from "../../utils/GlobalContext";
import { getLocalStorage } from "../../utils/getLocalStorage";

export default function TablePositions() {
  const typePyramid = getLocalStorage("typePyramid");

  return (
    <div className="px-12">
      <div className="flex justify-end p-1 text-gray-500">
        <p className="border py-1 px-12 rounded-l-lg bg-gray-200 border-gray-400">
          Primer puesto
        </p>
        <div className="border px-32 rounded-r-lg border-gray-400"></div>
      </div>
      {typePyramid >= 2 && (
        <div className="flex justify-end p-1 text-gray-500">
          <p className="border py-1  px-10 rounded-l-lg bg-gray-200 border-gray-400">
            Segundo puesto
          </p>
          <div className="border px-32 rounded-r-lg border-gray-400"></div>
        </div>
      )}
      {typePyramid >= 3 && (
        <div className="flex justify-end p-1 text-gray-500 ">
          <p className="border py-1  px-12 rounded-l-lg bg-gray-200 border-gray-400">
            Tercer puesto
          </p>
          <div className="border px-32 rounded-r-lg border-gray-400"></div>
        </div>
      )}

      {typePyramid >= 8 && (
        <div className="flex justify-end p-1 text-gray-500">
          <p className="border py-1  px-12 rounded-l-lg bg-gray-200 border-gray-400">
            Cuarto puesto
          </p>
          <div className="border px-32 rounded-r-lg border-gray-400"></div>
        </div>
      )}
    </div>
  );
}
