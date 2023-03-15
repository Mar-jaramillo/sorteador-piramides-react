import React, { useContext, useState } from "react";

import { createContext } from "react";
import GlobalContext from "../../utils/GlobalContext";
import { excelTypes } from "../../consts/excelTypes";
import * as XLSX from "xlsx";
import { Link, useNavigate } from "react-router-dom";
import icondowload from "../../assets/icons/icondowload.svg";

export const ThemeContext = createContext();

export default function ExcelUploader({ setIsLoading, setError }) {
  const [nameEvent, setNameEvent] = useState("");

  const [excelFile, setExcelFile] = useState(null);

  const navigate = useNavigate();
  const context = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      context.nameEvent = nameEvent;
      const workbook = XLSX.read(excelFile);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(worksheet);
      const json = JSON.stringify(data);
      localStorage.setItem("excelData", json);
      localStorage.setItem("nameEvent", nameEvent);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/data");
      }, 1000);
    } else {
      setShowModal(true);
    }
  };

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      if (selectedFile && excelTypes.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        };
      } else {
        setError(true);
      }
    } else {
      console.log("plz select your file");
    }
  };

  return (
    <div className="mt-20 flex items-center flex-col">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center flex-col"
      >
        <div className="max-w-xl">
          <div className="flex flex-col mb-12">
            <label className="text-white font-normal  text-lg mb-2">

              Ingrese el nombre del evento: *

            </label>
            <input
              required
              onChange={(e) => setNameEvent(e.target.value)}
              className="rounded-xl text-white placeholder:text-white/30 pl-2  backdrop-blur-md text-lg py-1  border-2 bg-white/20  border-white"
              type="text"
              placeholder="Ejemplo: Torneo Nacional de Hapkido 2023"
            />
          </div>

          <div className="flex flex-col  gap-3 mb-3">
            <label className="text-white text-left   text-lg">

              Cargue el listado de competidores: *

            </label>
            <input
              required
              onChange={handleFileUpload}
              type="file"
              name="FileAttachment"
              id="FileAttachment"
              className="pl-0 pr-44 relative file:text-white file:border-r-white file:bg-white/30 file:h-10  file:border-r-4 file:border-l-0 file:border-y-0 file:rounded-xl rounded-xl text-lg text-white px-24 border-2  bg-white/30 border-white"
            />
          </div>
          <div className="flex items-center justify-center">
            <span className="text-center inline-block text-white text-sm">
            Verifique que el archivo sea el correspondiente para generar los sorteos, se encuentre en <span className="font-semibold">la plantilla definida y esté en formato Excel con extensión .XLSM o .XLSX.{" "}</span>
            </span>
          </div>
          <div className="mt-3 flex items-center justify-center ">
            <img className="" src={icondowload} alt="" />
            <a
              href=""
              className=" underline  border-redborderbuttons text-white p-3 rounded-xl"
            >
              Descargar plantilla de consolidado de deportistas{" "}
            </a>
          </div>
          <div className="flex flex-col items-center justify-center my-10">
            <div className="flex items-center justify-center">
              <Link
                className="mx-3 bg-white/30 border-2 border-white text-white px-9 py-3 rounded-xl"
                to="/"
              >
                Cerrar
              </Link>
              <button className="mx-3 bg-redbuttons border-2 border-redborderbuttons text-white p-3 rounded-xl">
                Cargar deportistas
              </button>
            </div>

          </div>
        </div>
      </form>
    </div>
  );
}
