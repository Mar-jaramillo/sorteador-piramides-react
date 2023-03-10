import React from "react";

export default function Winner({pyramid}) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 grid items-center  ">
        <hr className="border border-gray-500" />
      </div>
      <div className="col-span-10 flex gap-2 items-center  ">
        <div
          className="border border-gray-500  h-12 w-12 rounded-md
          "
        >
          <div className="p-1">ID</div>
        </div>
        {pyramid !== 3 && (
          <div
            className="border border-gray-500  h-12 w-12 rounded-md
  "
          >
            <div className="p-1">Pts.</div>
          </div>
        )}
      </div>
    </div>
  );
}
