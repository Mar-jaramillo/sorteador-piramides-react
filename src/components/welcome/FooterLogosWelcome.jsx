import React from "react";
import logofederacion from "../../assets/logos/logofederacion.png";
import logoqubulowhite from "../../assets/logos/logoqubulowhite.png";

export default function FooterLogosWelcome() {
  return (
    <div className="flex  justify-center  w-full  ">
      <div className="mr-16">
        <p className="col-span-6 text-sm mb-3">Un producto de:</p>
        <img className="col-span-6  h-20 " src={logofederacion} alt="" />
      </div>
      <div>
        <p className="col-span-6 text-sm mb-8">Desarrollado por:</p>
        <img className="col-span-6   h-10  " src={logoqubulowhite} alt="" />
      </div>
    </div>
  );
}
