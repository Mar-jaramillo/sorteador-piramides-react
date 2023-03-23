import React from "react";

export default function TableCategories() {
  return (
    <div className="grid grid-cols-12 text-sm max-w-lg rounded-md bg-gray-300/70">
      <ul className="col-span-6  p-2 border-r">
        <li className="w-full">CATEGORÍA</li>
        <li className="w-full">GRADO</li>
        <li className="w-full">RAMA</li>
        <li className="w-full">DIVISIÓN</li>
      </ul>
      <ul className="col-span-6 p-2">
        <li className="w-full">CATEGORÍA</li>
        <li className="w-full">GRADO</li>
        <li className="w-full">RAMA</li>
        <li className="w-full">DIVISIÓN</li>
      </ul>
    </div>
  );
}
