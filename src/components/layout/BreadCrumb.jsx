import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import GlobalContext from "../../utils/GlobalContext";


export default function BreadCrumb() {
  const context = useContext(GlobalContext)
  const location = useLocation();


  return (
    <nav className="pt-6 text-white" aria-label="Breadcrumb">
      <ol className="inline-flex items-center gap-3">
        <li className="inline-flex items-center">
          <Link to="/"   className="inline-flex items-center text-sm ">
            Ingresar a la plataforma /
          </Link>
        </li>
        {location.pathname === "/data" || location.pathname === "/board" ? (
          <li className="inline-flex items-center">
            <Link  to="/home" className="inline-flex items-center text-sm ">
              Cargue deportistas /
            </Link>
          </li>
        ) : null}
        {location.pathname === "/board" ? (
          <li>
            <div className="flex items-center">
              <Link to="/data" className="ml-1 text-sm  md:ml-2">
                Visualización de deportistas /
              </Link>
            </div>
          </li>
        ) : null}
        {location.pathname === "/templates" ? (
          <li aria-current="page">
            <div className="flex items-center">
              <Link to="/board" className="ml-1 text-sm  md:ml-2">
                Grupos de deportistas /
              </Link>
            </div>
          </li>
        ) : null}
        {location.pathname === "/templates" ? (
          <li aria-current="page">
            <div className="flex items-center">
              <span className="ml-1 text-sm  md:ml-2">
                Pirámide
              </span>
            </div>
          </li>
        ) : null}
      </ol>
    </nav>
  );
}
