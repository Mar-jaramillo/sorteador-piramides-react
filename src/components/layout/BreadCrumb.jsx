import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function BreadCrumb() {
  const location = useLocation();
  return (
    <nav className="px-32 pt-14 text-white" aria-label="Breadcrumb">
      <ol className="inline-flex items-center gap-3">
     
          <li className="inline-flex items-center">
            <Link to="/" className="inline-flex items-center text-sm ">
              Ingresar a la plataforma /
            </Link>
          </li>
        {location.pathname === "/data" || location.pathname === "/board"? (
          <li className="inline-flex items-center">
            <Link to="/home" className="inline-flex items-center text-sm ">
              Cargue deportistas /
            </Link>
          </li>
        ) : null}
        {location.pathname === "/board"? (
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
              <span className="ml-1 text-sm  md:ml-2">Grupos de deportistas /</span>
            </div>
          </li>
        ) : null}
        {location.pathname === "/templates" ? (
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 text-sm  md:ml-2">
                Plantillas de pirámides
              </span>
            </div>
          </li>
        ) : null}
      </ol>
    </nav>
  );
}
