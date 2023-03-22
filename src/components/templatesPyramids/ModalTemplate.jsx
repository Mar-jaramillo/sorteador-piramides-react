import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getLocalStorage } from "../../utils/getLocalStorage";
import GlobalContext from "../../utils/GlobalContext";
import { handleCapture } from "../../utils/handleCapture";
import BodyTemplate from "./BodyTemplate";

export default function ModalTemplate({ setIsActive, sorteado }) {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { pathname } = useLocation();
  const close = () => setIsActive(false);
  const toBoard = () => navigate("/board");
  const [activeDetails, setActiveDetails] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center gap-5 mb-6">
        <p className="text-lg text-white flex flex-col justify-end font-semibold">
          {sorteado} de {context.totalGroups || getLocalStorage("totalGroups")}{" "}
          grupos sorteados
        </p>
        <div className="flex gap-5">
          {activeDetails ? (
            <button
              onClick={() => handleCapture(context.typePyramid)}
              className="btnPrimary w-32"
            >
              Imprimir PDF
            </button>
          ) : null}
          {/* <button className="w-36 text-white rounded-lg bg-green-500 ">
            Siguiente Sorteo{" "}
          </button> */}
        </div>
      </div>
  <div className="max-w-5xl h-96 overflow-auto bg-white   rounded-lg">
  <BodyTemplate
        setActiveDetails={setActiveDetails}
        activeDetails={activeDetails}
        typePyramid={context.typePyramid}
      />
      <div>
        aqui van los logos
      </div>
  </div>
      <div className="grid place-content-center mt-5">
        <button
          onClick={pathname === "/templates" ? toBoard : close}
          className="w-40 border py-2 bg-white/25 text-white transition duration-500 ease-in-out  rounded-lg"
        >
          {" "}
          &lt;&lt; Volver
        </button>
      </div>
    </>
  );
}
