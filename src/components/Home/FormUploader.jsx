import React from "react";
import { useNavigate } from "react-router-dom";
import icondowload from "../../assets/icons/icondowload.svg";

export default function FormUploader({
  handleSubmit,
  setNameEvent,
  handleFileUpload,
}) {
  const navigate = useNavigate();
  const downloadFile = () => {
    const url = "/documents/Plantilla Obligatoria.xlsx";
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Plantilla Obligatoria.xlsx");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center flex-col"
    >
      <div className="max-w-xl">
        <div className="flex flex-col mb-10">
          <label className="text-white font-normal  text-lg mb-1">
            Ingrese el nombre del evento: *
          </label>
          <input
            autoFocus
            required
            onChange={(e) => setNameEvent(e.target.value)}
            className="rounded-xl text-white placeholder:text-white/30 pl-2  backdrop-blur-md text-lg py-1 border-2 bg-white/20 border-white focus:outline-gray-400"
            type="text"
            placeholder="Ejemplo: Torneo Nacional de Hapkido 2023"
          />
        </div>

        <div className="flex flex-col mb-1 ">
          <label className="text-white text-left mb-2  text-lg">
            Cargue el listado de competidores: *
          </label>
          <input
            required
            onChange={handleFileUpload}
            type="file"
            name="FileAttachment"
            id="FileAttachment"
            accept=".xlsx, .xls"
            className="pl-0 pr-44 relative file:text-white file:border-r-white file:bg-white/30 file:h-10  file:border-r-4 file:border-l-0 file:border-y-0 file:rounded-xl rounded-xl text-lg text-white px-24 border-2  bg-white/30 border-white focus:outline-gray-400"
          />
        </div>
        <div className="flex items-center justify-center">
          <span className="text-center inline-block text-white text-sm">
            Verifique que el archivo sea el correspondiente para generar los
            sorteos, se encuentre en{" "}
            <span className="font-semibold">
              la plantilla definida y esté en formato Excel con extensión .XLSM
              o .XLSX.{" "}
            </span>
          </span>
        </div>
        <div className="mt-3 flex items-center justify-center ">
          <img className="" src={icondowload} alt="" />
          <a
            onClick={downloadFile}
            href="#!"
            className=" underline  border-redborderbuttons text-white p-3 rounded-xl"
          >
            Descargar plantilla de consolidado de deportistas{" "}
          </a>
        </div>
        <div className="flex flex-col items-center justify-center my-10">
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="mx-3 bg-white/30 border-2 border-white text-white px-9 py-3 rounded-xl hover:border-gray-400"
              onClick={() => navigate("/")}
            >
              Cerrar
            </button>
            <button className="btnPrimary hover:border-red-700">
              Cargar deportistas
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
