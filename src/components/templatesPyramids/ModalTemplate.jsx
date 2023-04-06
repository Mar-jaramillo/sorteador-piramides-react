import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getLocalStorage } from "../../utils/getLocalStorage";

import GlobalContext from "../../utils/GlobalContext";
import { handleCapture } from "../../utils/handleCapture";
import BackButton from "./BackButton";
import BodyTemplate from "./BodyTemplate";


export default function ModalTemplate({ sorteado }) {

  const context = useContext(GlobalContext);

  const typePyramid = context.typePyramid || getLocalStorage("typePyramid")
  const keyNameNow = context.keyNameNow || getLocalStorage("keyNameNow")
  return (
    <div className="px-32 pb-56 ">
      <div className="flex w-full  justify-between items-center gap-5 mb-4">
        <p className="text-lg   flex flex-col justify-end font-semibold">
        </p>
        <div className="flex gap-5 ">
          <button
            onClick={() => handleCapture(typePyramid, keyNameNow)}
            className="btnPrimary"
          >
            Imprimir PDF
          </button>
          <BackButton/>

          {/* <button className="w-36 text-white rounded-lg bg-green-500 ">
            Siguiente Sorteo{" "}
          </button> */}
        </div>
      </div>
      <div className="h-full w-full   rounded-lg bg-white p-5 mb-9">
        <BodyTemplate typePyramid={typePyramid} />
      </div>
      <BackButton/>
    </div>
  );
}
