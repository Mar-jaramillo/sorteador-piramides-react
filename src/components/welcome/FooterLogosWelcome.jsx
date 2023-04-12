import React from "react";
import logofederacion from "../../assets/logos/logofederacion.png";
import logoqubulowhite from "../../assets/logos/logoqubulowhite.png";

export default function FooterLogosWelcome() {
  return (
    <div className="flex  justify-center text-center gap-16 w-full  ">
      {/* <div className="">
        <p className="col-span-6 text-sm mb-3">Un producto de:</p>
        <a href="https://www.fedecolhap.com/">
          <img className="col-span-6 h-20" src={logofederacion} alt="" />
        </a>
      </div> */}
      <div>
        <p className="col-span-6 text-sm ">Desarrollado por:</p>
        <a target="_blank" rel="noopener noreferrer" href="https://qubilo.com">
          <img className="col-span-6   h-12  " src={logoqubulowhite} alt="" />
        </a>
      </div>
    </div>
  );
}
