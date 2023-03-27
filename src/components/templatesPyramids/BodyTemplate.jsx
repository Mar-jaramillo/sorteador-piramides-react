import React, { useContext, useState } from "react";
import { getLocalStorage } from "../../utils/getLocalStorage";
import GlobalContext from "../../utils/GlobalContext";
import Pyramid from "./Pyramid";
import TableCategories from "./TableCategories";
import groupLogos from "../../assets/logos/groupLogos.svg";
import logoqubilo from "../../assets/logos/logoqubilo.png";
import firmas from "../../assets/firmas.svg";
import TablePositions from "./TablePositions";
import EliminationPyramid from "./EliminationPyramid";

export default function BodyTemplate() {
  const [activeAcordeon, setActiveAcordeon] = useState(true);
  const context = useContext(GlobalContext);
  const typePyramid = context.typePyramid || getLocalStorage("typePyramid");

  return (
    <>
      <div id="capture" className="p-3 bg-white">
        <div
          onClick={() => setActiveAcordeon(!activeAcordeon)}
          className="w-full text-gray-700 flex justify-between"
        >
          <h3>Pirámide de {typePyramid} Competidores</h3>
          <div>
            <svg
              data-accordion-icon
              className={
                !activeAcordeon
                  ? "w-6 h-6 shrink-0"
                  : "w-6 h-6 rotate-180 shrink-0"
              }
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        {activeAcordeon ? (
          <div>
            <div className="flex justify-between my-3 mx-20">
              <img className="mt-5 h-24" src={groupLogos} alt="logo" />
              <div className="mt-14">
                <span className="text-xl py-3 px-14 rounded-lg bg-gray-200 text-slate-600 ">
                  {context.nameEvent || getLocalStorage("nameEvent")}
                </span>
              </div>
            </div>
            <div className=" flex justify-end">
              <div className="flex flex-col mx-20">
                <h3 className="text-gray-700  px-10 text-right text-lg font-bold">
                  Grupo{" "}
                  <span className="px-3 rounded-md">{context.keyNameNow}</span>
                </h3>
                <TableCategories />
              </div>
            </div>

            <div className="w-min-0 py-2">
              <Pyramid typePyramid={context.typePyramid} />
              {typePyramid >= 4 ? (
                <>
                  <p className="mx-72 text-end font-semibold text-gray-500">
                    {" "}
                    Tercer y Cuarto puesto
                  </p>
                  <div className="mb-11 flex justify-end">
                    <EliminationPyramid />
                  </div>
                </>
              ) : null}
              <TablePositions />
            </div>

            <div className="flex justify-center p-24">
              <img className="max-w-screen-lg" src={firmas} alt="firmas" />
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col items-center  w-32 h-32">
                <p className="text-gray-600">Desarrollado por:</p>
                <img className="" src={logoqubilo} alt="logo" />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
