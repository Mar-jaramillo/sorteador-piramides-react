import React from "react";

export default function TableCategories() {
  
  return (
    <div className="grid grid-cols-12 max-w-lg rounded-2xl text-md text-gray-500 bg-gray-200/60">
      <ul className="col-span-6  p-2 m-3">
        <li className="w-full">CATEGORÍA</li>
        <li className="w-full">GRADO</li>
        <li className="w-full">RAMA</li>
        <li className="w-full">DIVISIÓN</li>
      </ul>
      <ul className="col-span-6 p-2 m-3">
        <li className="w-full">Categoria</li>
        <li className="w-full">Grado</li>
        <li className="w-full">Rama</li>
        <li className="w-full">División</li>
      </ul>
    </div>
  );
}
