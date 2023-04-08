import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import BreadCrumb from "../components/layout/BreadCrumb";
import ModalTemplate from "../components/templatesPyramids/ModalTemplate";
import GlobalContext from "../utils/GlobalContext";
import LoaderSorteo from "../components/templatesPyramids/LoaderSorteo";
import ButtonsGroup from "../components/board/ButtonsGroup";

export default function Templates() {
  const [typePyramid, setTypePyramid] = useState(6);
  const { pathname } = useLocation();
  const context = useContext(GlobalContext);
  const [showAnimation, setShowAnimation] = useState(true);
  useEffect(() => {
    const controller = setTimeout(() => {
      setShowAnimation(false);
    },3000);

    return () => {
      clearTimeout(controller)
    };
  }, []);

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

          <h2 className="text-3xl font-bold  mb-16">
            Pirámide de {context.typePyramid} competidores {context.keyNameNow}{" "}
          </h2>

          <ButtonsGroup />
        </div>
        {/* <HeaderTemplates typePyramid={typePyramid} setTypePyramid={setTypePyramid} /> */}
        <ModalTemplate typePyramid={typePyramid} />
      </div>
    </>
  );
}
