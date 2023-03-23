import React from "react";

export default function TablePositions() {
  return (
    <div className="px-12">
    <div className="flex justify-end p-1 text-gray-500">
        <p className="border py-1 px-14 rounded-l-lg bg-gray-200 border-gray-400">
        Primer puesto     
        </p>
        <div className="border px-32 rounded-r-lg border-gray-400">
        </div>
    </div>
    <div className="flex justify-end p-1 text-gray-500">
        <p className="border py-1  px-12 rounded-l-lg bg-gray-200 border-gray-400">
        Segundo puesto
        </p>
        <div className="border px-32 rounded-r-lg border-gray-400">
        </div>
    </div>
    <div className="flex justify-end p-1 text-gray-500 ">
        <p className="border py-1  px-14 rounded-l-lg bg-gray-200 border-gray-400">
        Tercer puesto
        </p>
        <div className="border px-32 rounded-r-lg border-gray-400">
        </div>
    </div>
    <div className="flex justify-end p-1 text-gray-500">
        <p className="border py-1  px-14 rounded-l-lg bg-gray-200 border-gray-400">
        Cuarto puesto
        </p>
        <div className="border px-32 rounded-r-lg border-gray-400">
        </div>
    </div>
    </div>
  );
}
