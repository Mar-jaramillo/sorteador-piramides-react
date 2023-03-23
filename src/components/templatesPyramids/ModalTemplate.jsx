import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getLocalStorage } from "../../utils/getLocalStorage";
import GlobalContext from "../../utils/GlobalContext";
import { handleCapture } from "../../utils/handleCapture";
import BodyTemplate from "./BodyTemplate";
import logoHapkido from "../../assets/logos/federacion colombiana de hapkido.svg";
import logoKorea from "../../assets/logos/logoKorea.svg";
export default function ModalTemplate({ sorteado }) {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { pathname } = useLocation();

  return (
    <>
      <div className="flex w-full  justify-between items-center gap-5 mb-4">
        <p className="text-lg   flex flex-col justify-end font-semibold">
          {context.raffledCard} de {context.totalGroups || getLocalStorage("totalGroups")}{" "}
          grupos sorteados
        </p>
        <div className="flex gap-5">
          <button
            onClick={() => handleCapture(context.typePyramid)}
            className="btnPrimary w-32"
          >
            Imprimir PDF
          </button>

          {/* <button className="w-36 text-white rounded-lg bg-green-500 ">
            Siguiente Sorteo{" "}
          </button> */}
        </div>
      </div>
      <div className="h-full w-full   rounded-lg bg-white p-5">
        <BodyTemplate typePyramid={context.typePyramid} />

        <div className="h-20 flex gap-5 px-7">
          <img src={logoKorea} alt="logo" />
          <img src={logoHapkido} alt="logo" />
        </div>
      </div>
      <div className="grid place-content-center mt-5">
        <button
          onClick={() => navigate("/board")}
          className="w-40 border py-2 bg-white/25   transition duration-500 ease-in-out  rounded-lg"
        >
          {" "}
          &lt;&lt; Volver
        </button>
      </div>
    </>
  );
}
