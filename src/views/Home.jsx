import React, { useEffect, useState } from "react";
import ExcelUploader from "../components/Home/ExcelUploader";

import ErrorComponent from "../components/layout/error/ErrorComponent";
import BreadCrumb from "../components/layout/BreadCrumb";
import { useLocation } from "react-router-dom";
import FooterGeneral from "../../src/components/layout/FooterGeneral";


export default function Home() {
  const { pathname } = useLocation();

  useEffect(() => {

    const changePageTitle = () => {
      const newPageTitle = "Cargar Archivo";
      pathname === "/home" && (document.title = newPageTitle);
    };
    changePageTitle();
  }, []);

  const [error, setError] = useState(false);

  if (error) {
    return <ErrorComponent setError={setError} />;
  } else {
    return (
      <>
        <div id="home" className="fadeinfast h-screen text-white">
          <div className="px-32">
          <BreadCrumb/>
          <h2 className="text-left text-3xl font-bold">
            
            Cargar Consolidado de Deportistas
          </h2>
          </div>

          <ExcelUploader setError={setError} />
        </div>

        <FooterGeneral />
      </>
    );
  }
}
