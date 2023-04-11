import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import BreadCrumb from "../components/layout/BreadCrumb";
import ModalTemplate from "../components/templatesPyramids/ModalTemplate";
import GlobalContext from "../utils/GlobalContext";
import LoaderSorteo from "../components/templatesPyramids/LoaderSorteo";
import ButtonsGroup from "../components/board/ButtonsGroup";
import { getLocalStorage } from "../utils/getLocalStorage";

export default function Templates() {
 
  const { pathname } = useLocation();
  const context = useContext(GlobalContext);
  const [showAnimation, setShowAnimation] = useState(true);
  const [controllerAnimation, setControllerAnimation] = useState(false)
 
 
  useEffect(() => {
    setShowAnimation(true)
    const controller = setTimeout(() => {
      setShowAnimation(false);
 
    },3000);

    return () => {
      clearTimeout(controller)
    };
  }, [controllerAnimation]);

  useEffect(() => {
    const changePageTitle = () => {
      const newPageTitle = "Pirámide";
      pathname === "/templates" && (document.title = newPageTitle);
    };
    changePageTitle();
  }, []);

  return (
    <>
      <div id="pyramid" className="fadeinfast text-white  w-full">
        {showAnimation && (
          <div className="fixed w-full z-50 h-screen bg-blueSecondary/50 backdrop-blur-sm grid place-content-center">
            <LoaderSorteo setShowAnimation={setShowAnimation} />
          </div>
        )}
        <div className="px-32 pt-10">
          <BreadCrumb />

          <h2 className="text-3xl font-bold  ">
            Pirámide de {context.typePyramid} Competidores {context.keyNameNow}{" "}
          </h2>
          <h3 className="uppercase">{context.nameEvent || getLocalStorage("nameEvent")}</h3>

          <ButtonsGroup />
        </div>
        {/* <HeaderTemplates typePyramid={typePyramid} setTypePyramid={setTypePyramid} /> */}
        <ModalTemplate  controllerAnimation={controllerAnimation} setControllerAnimation={setControllerAnimation} />
      </div>
    </>
  );
}
