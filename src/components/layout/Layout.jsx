import React from "react";
import { useLocation } from "react-router-dom";
// import BreadCrumb from "./BreadCrumb";


export default function Layout({ children }) {
  // Obtener la ubicación actual de la página.
  const location = useLocation();

  // Devuelve el componente que representa la estructura general de la página.
  return (
    <div className="">
      {/* Mostrar el componente BreadCrumb si la ubicación es /data o /board */}
      
      <section className="">
      {/* {location.pathname === "/data" || location.pathname === "/board" ? <BreadCrumb /> : null} */}
        {children}
      </section>
      {/* Mostrar el componente Footer */}

    </div>
  );
}