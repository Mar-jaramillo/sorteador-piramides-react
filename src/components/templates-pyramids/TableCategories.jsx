import React from "react";

export default function TableCategories() {
  return (

      <table className="text-left">
        <thead className="text-center text-lg">
          <tr>
            <th>CÓDIGO</th>
            <th>CMDYA372</th>
          </tr>
        </thead>
        <tbody className=" text-sm">
          <tr className=" border border-gray-500 ">
            <th
              scope="row"
              className="px-6 py-2 font-medium    text-white"
            >
              CATEGORÍA
            </th>
            <td className="border border-gray-500 px-4 ">Nombre de la categoría</td>
          </tr>
          <tr className="border border-gray-500 ">
            <th
              scope="row"
              className="px-6 py-2 font-medium   "
            >
              GRADO
            </th>
            <td className="border border-gray-500 px-6 ">Nombre del Grado</td>
          </tr>
          <tr className="border border-gray-500 ">
            <th
              scope="row"
              className="px-6 py-2 font-medium   "
            >
              RAMA
            </th>
            <td className="border border-gray-500 px-6">Nombre de la Rama</td>
          </tr>
          <tr className="border border-gray-500 ">
            <th
              scope="row"
              className="px-6 py-2 font-medium   "
            >
              DIVISIÓN
            </th>
            <td className="border border-gray-500 px-6 ">Nombre de la división</td>
          </tr>
        </tbody>
      </table>
 
  );
}
