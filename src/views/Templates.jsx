import React, { useContext, useEffect, useState } from "react";
import BreadCrumb from "../components/layout/BreadCrumb";
import HeaderTemplates from "../components/templatesPyramids/HeaderTemplates";

import BodyTemplate from "../components/templatesPyramids/BodyTemplate";
import { handleCapture } from "../utils/handleCapture";

export default function Templates() {
  const [typePyramid, setTypePyramid] = useState(2);

  return (
    <div id="pyramid" className="p-10 text-white h-screen px-32">
      <BreadCrumb />
      <h2 className="text-3xl mb-10 font-bold">
        Pirámide de {typePyramid} competidores ( Grupo XXXXXXX ){" "}
      </h2>
      {/* <HeaderTemplates typePyramid={typePyramid} setTypePyramid={setTypePyramid} /> */}
      <div className="flex justify-between mb-4 ">
        <p className="text-xl font-semibold">2 de 18 grupos sorteados</p>
        <div className="flex gap-5">
          <button  onClick={()=>handleCapture(typePyramid)}  className="btnPrimary w-32">Imprimir PDF</button>
          <button className="w-36 rounded-lg bg-green-500 ">
            Siguiente Sorteo{" "}
          </button>
        </div>
      </div>
      <BodyTemplate typePyramid={typePyramid} />
    </div>
  );
}
