import React from "react";

const Loader = () => {
  return (
    <div className="flex ">
      <h3 className="text-4xl text-white ">Sorteando</h3>
      <div className="spinnerSorteo flex  items-end p-1">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  );
};

export default Loader;
