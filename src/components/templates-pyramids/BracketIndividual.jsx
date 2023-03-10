import React from "react";

export default function BracketIndividual() {
  return (
    <div className="mb-4 px-2 ">
      <div className="grid grid-cols-12 rounded-md">
        <div className="col-span-2 bg-white/20 border border-gray-500  rounded-md mr-1">
          <div className="text-sm p-1">ID</div>
        </div>
        <div className="col-span-8">
          <div className="border border-gray-500  h-6 rounded-t-md flex items-center px-3 ">
            Patricia guzman benavidez
          </div>
          <div className="border border-gray-500  h-6 rounded-b-md flex items-center px-3 ">
            Cundinamarca
          </div>
        </div>
        <div className="col-span-2 border border-gray-500  ml-2 rounded-md">
          <div className="p-1">Pts.</div>
        </div>

      </div>
    </div>
  );
}
