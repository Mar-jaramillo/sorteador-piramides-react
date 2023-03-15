import React from "react";
import { handleCapture } from "../../utils/handleCapture";
import BodyTemplate from "./BodyTemplate";
import errorIcon from "../../assets/icons/erroricon.svg"

export default function ModalTemplate({ typePyramid, setisActive }) {
  return (
    <div className="fixed p-5 overflow-auto top-0 w-screen h-screen  ">
      <div className="w-full bg-white rounded-t-md flex justify-end ">
        {typePyramid >=3 && <button className="fixed bottom-10 right-3 py-2 px-7 rounded-md bg-redbuttons text-white " onClick={()=>handleCapture(typePyramid)}>Descargar Piramide</button>}
        <button className="p-3" onClick={() => setisActive(false)}>
          X
        </button>
      </div>
      {
        typePyramid < 3 ?
        (<div className="bg-white h-52 grid place-content-center ">
          <div className="flex justify-center">
          <img src={errorIcon} alt="" />
          </div>
          <h1>Cantidad de deportistas Insuficientes para generar Piramide</h1>
        </div>)
      :
     ( <BodyTemplate   setisActive={setisActive} typePyramid={typePyramid} />)
    }
    </div>
  );
}
