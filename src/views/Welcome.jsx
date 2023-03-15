import React from "react";
import Login from "../components/welcome/Login";
import iconhapkido from "../assets/icons/iconhapkido.svg";
import logofederacion from "../assets/logos/logofederacion.png";
import logoqubulowhite from "../assets/logos/logoqubulowhite.png";

export default function Welcome() {
  return (
    <div id="welcome" className="grid grid-cols-12 h-screen text-white">
      <div className="col-span-6"></div>
      {/* section left */}
      <div className="col-span-6 flex flex-col justify-end   h-full">
        <div className=" flex flex-col justify-center items-center py-12">
          <img className="h-12 mb-4" src={iconhapkido} alt="" />
          <p className="text-center font-bold text-2xl mb-10  max-w-md">
            Bienvenido al Sorteador de Pirámides de Competencias para Hapkido
          </p>

          {/* section Access */}
          <Login />
        </div>
        {/* section Logos */}
        <div className="flex  justify-center py-6 w-full  ">
          <div className="mr-16">
            <p className="col-span-6 text-sm mb-3">Un producto de:</p>
            <img className="col-span-6  h-20 " src={logofederacion} alt="" />
          </div>

          <div>
            <p className="col-span-6 text-sm mb-8">Desarrollado por:</p>
            <img className="col-span-6   h-10  " src={logoqubulowhite} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
