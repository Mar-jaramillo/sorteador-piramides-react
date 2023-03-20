import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { handleCapture } from "../../utils/handleCapture";
import BodyTemplate from "./BodyTemplate";

export default function ModalTemplate({ typePyramid, setIsActive }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const close = () => setIsActive(false);
  const toBoard = () => navigate("/board");

  return (
    <>
      <div className="flex justify-between gap-5 items-center mb-6">
        <p className="text-xl flex flex-col justify-end font-semibold">
          2 de 18 grupos sorteados
        </p>
        <div className="flex gap-5">
          <button
            onClick={() => handleCapture(typePyramid)}
            className="btnPrimary w-32"
          >
            Imprimir PDF
          </button>
          <button className="w-36 rounded-lg bg-green-500 ">
            Siguiente Sorteo{" "}
          </button>
        </div>
      </div>
      <BodyTemplate typePyramid={typePyramid} />
      <div className="grid place-content-center">
        <button
          onClick={pathname === "/templates" ? toBoard : close}
          className="w-40 border py-2 bg-white/25 transition duration-500 ease-in-out hover:bg-redbuttons rounded-lg"
        >
          {" "}
          &lt;&lt; Volver
        </button>
      </div>
    </>
  );
}
