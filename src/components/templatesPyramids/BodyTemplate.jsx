import React, { useContext, useState } from "react";
import { getLocalStorage } from "../../utils/getLocalStorage";
import GlobalContext from "../../utils/GlobalContext";
import Pyramid from "./Pyramid";
import TableCategories from "./TableCategories";
import logoHapkido from "../../assets/logos/federacion colombiana de hapkido.svg";
import logoKorea from "../../assets/logos/logoKorea.svg";
import TablePositions from "./TablePositions";

export default function BodyTemplate() {
  const [activeAcordeon, setActiveAcordeon] = useState(true);
  const context = useContext(GlobalContext);
  return (
    <>
      <div id="capture" className="p-3 w-full h-full bg-white">
        <div
          onClick={() => setActiveAcordeon(!activeAcordeon)}
          className="w-full text-gray-700 flex justify-between"
        >
          <h3>Pirámide de {context.typePyramid} Competidores</h3>
          <div>
          <svg
              data-accordion-icon
              className={!activeAcordeon ?"w-6 h-6 shrink-0" : "w-6 h-6 rotate-180 shrink-0"}
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
            <h3 className="text-gray-700 text-center text-xl w-full font-bold my-7 p-2">
              CODIGO {context.keyNameNow}
            </h3>
            <div className="flex items-center justify-between px-5">
              <h2 className="bg-gray-300 py-1 px-7 rounded-lg">
                {context.nameEvent || getLocalStorage("nameEvent")}
              </h2>

              <TableCategories />
            </div>

            <div className="py-2">
              <Pyramid typePyramid={context.typePyramid} />
            </div>
            <div className="h-20 flex gap-5 px-7 my-7">
              <img src={logoKorea} alt="logo" />
              <img src={logoHapkido} alt="logo" />
            </div>
          </div>
        ) : null}
      </div>

      {/* <TablePositions /> */}
    </>
  );
}
