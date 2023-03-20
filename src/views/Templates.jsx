import React, { useContext, useEffect, useState } from "react";
import BreadCrumb from "../components/layout/BreadCrumb";
import HeaderTemplates from "../components/templatesPyramids/HeaderTemplates";

import BodyTemplate from "../components/templatesPyramids/BodyTemplate";
import { handleCapture } from "../utils/handleCapture";
import { useNavigate } from "react-router-dom";
import ModalTemplate from "../components/templatesPyramids/ModalTemplate";

export default function Templates() {
  const [typePyramid, setTypePyramid] = useState(3);

  return (
    <div id="pyramid" className="p-10 text-white min-h-screen h-full px-32">
      <BreadCrumb />
      <h2 className="text-3xl font-bold  mb-16">
        Pirámide de {typePyramid} competidores ( Grupo XXXXXXX ){" "}
      </h2>
      {/* <HeaderTemplates typePyramid={typePyramid} setTypePyramid={setTypePyramid} /> */}
      <ModalTemplate typePyramid={typePyramid} />
    </div>
  );
}
