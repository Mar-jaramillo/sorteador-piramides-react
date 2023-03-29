import React from "react";
import errorIcon from "../../../assets/icons/errorIcon.svg";

export default function ErrorComponent({setError}) {
  return (
    <>
      <div className="fixed top-0 left-0  w-screen h-screen text-center grid place-content-center ">
        <div className="mt-10 text-white max-w-md flex flex-col bg-white/20 p-8 justify-center items-center  border rounded-xl">
          <img className="mb-5" src={errorIcon} alt="" />
          <p>No pudimos cargar tu archivo</p>
          <p className="text-xs mb-5">Revisa que el formato y extención del archivo sean correctos</p>
          <button onClick={()=>setError(false)} className="bg-white/20 rounden-md border py-2 px-16 rounded-lg">Cerrar</button>
        </div>
      </div>
    </>
  );
}
