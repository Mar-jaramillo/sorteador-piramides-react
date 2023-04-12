import React from "react";
import logoqubulowhite from "../../assets/logos/logoqubulowhite.png";

export default function Footer() {
  return (
    <div className="absolute bottom-8 right-8 text-white">
    <p className="text-sm">Desarrollado por:</p>
    <a target="_blank" rel="noopener noreferrer" href="https://qubilo.com">
    <img
      className="h-10"
      src={logoqubulowhite}
      alt=""
    />
    </a>
    </div>
  );
}
