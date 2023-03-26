import React from "react";

const Loader = () => {
  return (
    <div className="flex ">
      <h3 className="text-5xl text-white ">Sorteando</h3>
      <div class="spinnerSorteo flex  items-end p-1">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div>
  );
};

export default Loader;
