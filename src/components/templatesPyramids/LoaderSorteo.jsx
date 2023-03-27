import React, { useContext } from "react";
import ListModal from "./ListModal";
import GlobalContext from "../../utils/GlobalContext";

const LoaderSorteo = ({ setShowAnimation }) => {
  const context = useContext(GlobalContext);
  const group = context.groupNow.arrayGroup || groupLocal.arrayGroup;

  return (
    <div className="flex flex-col">
      {/* <div className="flex py-2">

        <h3 className="text-4xl text-white ">Sorteando</h3>
        <div className="spinnerSorteo flex  items-end p-1">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div> */}
      <div className="loadSorteo">
        <hr />
        <hr />
        <hr />
        <hr />
      </div>
      <ListModal group={group} setShowAnimation={setShowAnimation} />
    </div>
  );
};

export default LoaderSorteo;
