import React, { useContext, useState } from "react";
import { getLocalStorage } from "../../utils/getLocalStorage";
import GlobalContext from "../../utils/GlobalContext";
import Pyramid from "./Pyramid";
import TableCategories from "./TableCategories";
import groupLogos from "../../assets/logos/groupLogos.svg";
import logoqubilo from "../../assets/logos/logoqubilo.png";
import TablePositions from "./TablePositions";
import EliminationPyramid from "./EliminationPyramid";

export default function BodyTemplate() {
  const [activeAcordeon, setActiveAcordeon] = useState(true);
  const context = useContext(GlobalContext);
  const typePyramid = context.typePyramid || getLocalStorage("typePyramid");

  return (
    <>
      <div id="capture" className="p-3 max-w-5xl w-full bg-white">
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
            <div className="flex justify-between w-full my-3 gap-10 items-center px-5 ">
              <img className="h-24" src={groupLogos} alt="logo" />
              <div className="grid place-content-center text-right">
                <span className="text-xl  rounded-lg text-slate-600  ">
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

            <div className="w-min-0 py-2 ">
              <Pyramid typePyramid={context.typePyramid} />

              <div className="flex flex-row-reverse items-center my-7">
                {typePyramid >= 4 ? (
                  <div className="grid place-content-center  ">
                    <p className="font-semibold text-center text-gray-700  ">
                      {" "}
                      Tercer y Cuarto puesto
                    </p>
                    <div className="flex flex-col mr-2 items-center ">
                      <div className="text-black text-sm text-center m-1 p-1 h-6 w-6 font-normal bg-gray-300 rounded-full">{typePyramid - 1}</div>
                    </div>
                    <div className="mb-11">
                      <EliminationPyramid />
                    </div>
                  </div>
                ) : null}
                <TablePositions />
              </div>
            </div>

            <div className="flex justify-center my-7 text-gray-700 gap-5">
              <p>Vo Bo Juez central ______________________</p>
              <p>Registro Consolidador ______________________</p>
              <p>Vo Bo Coor. Juzgamiento ______________________</p>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col items-center mt-7 w-32 h-32">
                <p className="text-gray-600">Desarrollado por:</p>
                <a href="https://qubilo.com/">
                  <img className="" src={logoqubilo} alt="logo" />
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
