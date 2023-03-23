import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../components/layout/BreadCrumb";
import ModalTemplate from "../components/templatesPyramids/ModalTemplate";
import GlobalContext from "../utils/GlobalContext";

export default function Templates() {
  const [typePyramid, setTypePyramid] = useState(6);
  const { pathname } = useLocation();
  const context = useContext(GlobalContext);
  useEffect(() => {
    const changePageTitle = () => {
      const newPageTitle = "Plantillas Vacías";
      pathname === "/templates" && (document.title = newPageTitle);
    };
    changePageTitle();
  }, []);

  return (
    <div id="pyramid" className="p-10 text-white  w-full h-full ">
      <BreadCrumb />
      <h2 className="text-3xl font-bold  mb-16">
        Pirámide de {context.typePyramid} competidores ( Grupo XXXXXXX ){" "}
      </h2>
      {/* <HeaderTemplates typePyramid={typePyramid} setTypePyramid={setTypePyramid} /> */}
      <ModalTemplate typePyramid={typePyramid} />
    </div>
  );
}
