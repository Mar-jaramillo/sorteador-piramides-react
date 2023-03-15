import React, { useState } from "react";

export default function CardIndividual({ keyName, groupByCode }) {
  const [isReady, setIsReady] = useState(false);
  const handleIsReady = () => {
    setIsReady(true);
    const cantidad = groupByCode.length;
    let tipo = null;
    if (cantidad === 1) {
      tipo = "No se puede sortear";
    } else if (cantidad <= 3) {
      tipo = "piramide-3";
    } else if (cantidad <= 4) {
      tipo = "piramide-4";
    } else if (cantidad <= 8) {
      tipo = "piramide-8";
    } else if (cantidad <= 16) {
      tipo = "piramide-16";
    } else if (cantidad <= 32) {
      tipo = "piramide-32";
    }
    console.log({ cantidad, tipo });
  };

  return (
    <div className="col-span-6 mx-3 my-3  bg-white/20 border-2 border-gray-200 rounded-2xl shadow">
      {/*Card exterior*/}
      <div className="text-center grid grid-cols-12 p-4 border-b-2 rounded-t-2xl bg-white/30">
        <div className=" col-span-6">
          <p className="font-medium text-white"> Grupo {keyName}</p>
        </div>
        <div className="col-span-6 flex justify-end">
          <p className="text-white font-normal">
            {groupByCode.length} Competidores
          </p>
        </div>
      </div>

      {/*Card interior*/}
      <div className="p-2 grid grid-cols-12 text-white">
        <div className="col-span-6 ">
          <ul className="h-36 overflow-auto">
            {groupByCode.map((deportista, index) => (
              <div key={index} className="">
                <li className="text-md">
                  {index + 1} {deportista["Nombre Deportista"]}
                </li>
                <p className="pl-12 mb-2 text-sm">{deportista["Delegación"]}</p>
              </div>
            ))}
          </ul>
        </div>

        <div className="col-span-6 p-2">
          <div className="grid grid-cols-12 my-2 bg-white/30  rounded-lg ">
            <div className="col-span-6">
              <p className="mx-2 font-medium">CATEGORÍA:</p>
            </div>
            <div className="col-span-6">
              <p className="text-center bg-white/30 rounded-lg">
                {" "}
                {groupByCode[0]["Categoría"]}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 my-2 bg-white/30  rounded-lg ">
            <div className="col-span-6">
              <p className="mx-2 font-medium">GRADO:</p>
            </div>
            <div className="col-span-6">
              <p className="text-center bg-white/30 rounded-lg">
                {" "}
                {groupByCode[0]["Grado"]}
              </p>
              </div>
              </div>

            
            <div className="grid grid-cols-12 my-2 bg-white/30  rounded-lg ">
            <div className="col-span-6">
              <p className="mx-2 font-medium">RAMA:</p>
            </div>
            <div className="col-span-6">
              <p className="text-center bg-white/30 rounded-lg">
                {" "}
                {groupByCode[0]["Rama"]}
              </p>
            </div>
            </div>

            <div className="grid grid-cols-12 my-2 bg-white/30  rounded-lg ">
            <div className="col-span-6">
              <p className="mx-2 font-medium">DIVISIÓN:</p>
            </div>
            <div className="col-span-6">
              <p className="text-center bg-white/30 rounded-lg">
                {" "}
                {groupByCode[0]["División"]}
              </p>
            </div>
          </div>
          <div>
            <span className="grid grid-cols 12 justify-end">
              {isReady ? (
                <div>
                  <button className="col-span-6  text-white m-4 px-5 py-2  underline">
                    Ver sorteo
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleIsReady}
                  className=" m-4 px-5 py-2 rounded-lg font-medium border-2 border-white hover:bg-redbuttons hover:border-2 hover:border-redbuttons text-white bg-white/30"
                >
                  Sortear
                </button>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
