import React, { useContext } from "react";
import ListModal from "./ListModal";
import GlobalContext from "../../utils/GlobalContext";
import ruleta from "../../assets/ruleta.gif";

const LoaderSorteo = ({ setShowAnimation }) => {
  const context = useContext(GlobalContext);
  const group = context.groupNow.arrayGroup || groupLocal.arrayGroup;

  return (
    <div className="flex flex-col justify-center  pt-28">
  <div className=" grid place-content-center  w-full">
  <img className="h-40 " src={ruleta} alt="" />
  <p className="text-center my-3">Sorteando...</p>
  </div>
      <ListModal group={group} setShowAnimation={setShowAnimation} />
    </div>
  );
};

export default LoaderSorteo;
