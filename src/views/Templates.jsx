import React, { useState } from "react";
import BreadCrumb from "../components/layout/BreadCrumb";
import HeaderTemplates from "../components/templates-pyramids/HeaderTemplates";
import PyramidEigth from "../components/templates-pyramids/pyramids/PyramidEigth";
import PyramidFour from "../components/templates-pyramids/pyramids/PyramidFour";
import PyramidSixteen from "../components/templates-pyramids/pyramids/PyramidSixteen";
import PyramidThirtyTwo from "../components/templates-pyramids/pyramids/PyramidThirtyTwo";
import PyramidThree from "../components/templates-pyramids/pyramids/PyramidThree";
import TableCategories from "../components/templates-pyramids/TableCategories";
import TablePositions from "../components/templates-pyramids/TablePositions";

export default function Templates() {
  const [valuePyramid, setValuePyramid] = useState(3);

  return (
    <>
      <div id="" className="px-16 pt-10 text-white ">
        <BreadCrumb />
        <HeaderTemplates setValuePyramid={setValuePyramid} />
        <div className="grid grid-cols-12  p-7">
          <div className="p-3 col-span-8">
            {valuePyramid === 3 && <PyramidThree />}
            {valuePyramid === 4 && <PyramidFour />}
            {valuePyramid === 8 && <PyramidEigth />}
            {valuePyramid === 16 && <PyramidSixteen />}
            {valuePyramid === 32 && <PyramidThirtyTwo />}
          </div>
          <div className="col-span-4">
            <TableCategories />
          </div>

          <div className=" ">
            <TablePositions />
          </div>
        </div>
      </div>
    </>
  );
}
