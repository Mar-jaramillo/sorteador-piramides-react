import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BotonGroup from "../components/board/BotonGroup";
import BreadCrumb from "../components/layout/BreadCrumb";
import ModalTemplate from "../components/templatesPyramids/ModalTemplate";
import GlobalContext from "../utils/GlobalContext";
import LoaderSorteo from "./LoadSorteo";

export default function Templates() {
  const [typePyramid, setTypePyramid] = useState(6);
  const { pathname } = useLocation();
  const context = useContext(GlobalContext);
  const [showAnimation, setShowAnimation] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(false);
    }, 3000);
    return () => clearTimeout();
  }, []);

  useEffect(() => {
    const changePageTitle = () => {
      const newPageTitle = "Plantillas Vacías";
      pathname === "/templates" && (document.title = newPageTitle);
    };
    changePageTitle();
  }, []);

  return (
    <>
      <div id="pyramid" className=" text-white  w-full">
        {showAnimation && (
          <div className="fixed w-full z-50 h-screen  backdrop-blur-sm bg-black/50 grid place-content-center">
            <LoaderSorteo />
          </div>
        )}
        <div className="px-32">
        <BreadCrumb />
   
        <h2 className="text-3xl font-bold  mb-16">
          Pirámide de {context.typePyramid} competidores {context.keyNameNow}{" "}
        </h2>
  
        <BotonGroup />
        </div>
        {/* <HeaderTemplates typePyramid={typePyramid} setTypePyramid={setTypePyramid} /> */}
        <ModalTemplate typePyramid={typePyramid} />
      </div>
    </>
  );
}
