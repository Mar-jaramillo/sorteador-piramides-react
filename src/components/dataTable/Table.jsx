import React, { Fragment } from "react";
import iconParticipants from "../../assets/icons/iconParticipants.svg";
import iconGroup from "../../assets/icons/iconGroup.svg";

export default function Table({ dataExcel, filteredPerson }) {
  const renderTableRows = ({
    CodDep,
    Delegación,
    "Nombre Deportista": nombre,
    Rama,
    Categoría,
    Grado,
    División,
    "CBTE IND": codigo,
  }) => (
    <Fragment key={CodDep}>
      <div className="col-span-6 grid grid-cols-12 border-r border-t items-center">
        <div className="py-1 col-span-2  pl-3 ">{CodDep}</div>
        <div className="py-1 col-span-4">{Delegación}</div>
        <div className="py-1 col-span-6">{nombre}</div>
      </div>
      <div className="col-span-6 grid grid-cols-12 border-t  items-center">
        <div className="py-1 col-span-3  pl-3 ">{Rama}</div>
        <div className="py-1 col-span-2">{Categoría}</div>
        <div className="py-1 col-span-3">{Grado}</div>
        <div className="py-1 col-span-2">{División}</div>
        <div className="py-1 col-span-2 pr-4 ">{codigo}</div>
      </div>
    </Fragment>
  );

  return (
    <>
      <div className="text-left grid grid-cols-12 text-sm ">
        <div className="border-r h-24 font-semibold col-span-6 flex justify-center items-center gap-3">
          <img className="h-6" src={iconParticipants} alt="iconParticipants" />
          DATOS GENERALES COMPETIDORES
        </div>
        <div className=" h-24 col-span-6 font-semibold flex justify-center items-center gap-3">
          <img className="h-6" src={iconGroup} alt="iconParticipants" />
          CATEGORIAS
        </div>
        <div className="col-span-6 border-r grid grid-cols-12 bg-white/25">
          <div scope="col" className="col-span-2 py-4 pl-3 font-normal">
            No.
          </div>
          <div scope="col" className="col-span-4 py-4 font-normal">
            DELEGACIÓN
          </div>
          <div scope="col" className="col-span-6 py-4 font-normal">
            NOMBRES Y APELLIDOS
          </div>
        </div>
        <div className="col-span-6 grid grid-cols-12 bg-white/25">
          <div scope="col" className="col-span-3 py-4  pl-3  font-normal">
            RAMA
          </div>
          <div scope="col" className="col-span-2 py-4 font-normal">
            EDAD
          </div>
          <div scope="col" className="col-span-3 py-4 font-normal">
            GRADO
          </div>
          <div scope="col" className="col-span-2 py-4 font-normal">
            PESO
          </div>
          <div scope="col" className="col-span-2 py-4  font-normal">
            CODIGO
          </div>
        </div>
      </div>
      <div id='tableBody' className="grid grid-cols-12 text-xs  h-60 overflow-auto">
        {filteredPerson.length > 0
          ? filteredPerson.map(renderTableRows)
          : dataExcel.map(renderTableRows)}
      </div>
    </>
  );
}
