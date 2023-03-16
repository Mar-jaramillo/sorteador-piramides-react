import React, { useContext, useEffect, useState } from "react";
import BreadCrumb from "../components/layout/BreadCrumb";
import HeaderTemplates from "../components/templates-pyramids/HeaderTemplates";

import BodyTemplate from "../components/templates-pyramids/BodyTemplate";

export default function Templates() {
  const [typePyramid, setTypePyramid] = useState(2);

  return (
    <>
      <div id="" className="p-10 text-white ">
        <BreadCrumb />
        <HeaderTemplates typePyramid={typePyramid} setTypePyramid={setTypePyramid} />
        <BodyTemplate typePyramid={typePyramid} />
      </div>
    </>
  );
}
