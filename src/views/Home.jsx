import React, { useState } from "react";
import ExcelUploader from "../components/Home/ExcelUploader";
import logoqubulowhite from "../assets/logos/logoqubulowhite.png";
import Loader from "../components/layout/Loader";
import ErrorComponent from "../components/layout/error/ErrorComponent";
import BreadCrumb from "../components/layout/BreadCrumb";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  if (error) {
    return <ErrorComponent setError={setError} />;
  } else {
    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <div id="home" className="h-screen text-white">
           
            <h2 className="text-left  px-32 text-3xl font-bold">
            <BreadCrumb />
              Cargar Consolidado de Deportistas

            </h2>
            <ExcelUploader setIsLoading={setIsLoading} setError={setError} />
            <img
              className="absolute bottom-8 right-8 h-16"
              src={logoqubulowhite}
              alt=""
            />
          </div>
        )}
      </>
    );
  }
}
