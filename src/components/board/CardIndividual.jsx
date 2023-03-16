import React, { useContext, useState } from "react";
import GlobalContext from "../../utils/GlobalContext";
import iconRaffled from "../../assets/icons/iconRaffled.svg";

export default function CardIndividual({ keyName, groupByCode, setisActive }) {
  const [isReady, setIsReady] = useState(false);
  const context = useContext(GlobalContext);
  
  const handleIsReady = () => {
    context.groupNow = groupByCode;
    const cantidad = groupByCode.length;
    let tipo = null;
    if (cantidad === 1) {
      tipo = null;
    } else if (cantidad <= 3) {
      return;
    } else if (cantidad <= 4) {
      tipo = 4;
    } else if (cantidad <= 8) {
      tipo = 8;
    } else if (cantidad <= 16) {
      tipo = 16;
    } else if (cantidad <= 32) {
      tipo = 32;
    }
    setIsReady(true);
    context.typePyramid = tipo;
    setisActive(true);
  };

  const greenCard =
    "text-center grid grid-cols-12 p-4 border-b-2 rounded-t-2xl bg-green-500";
  const grayCard =
    "text-center grid grid-cols-12 p-4 border-b-2 rounded-t-2xl bg-white/30";
  return (
    <div className="col-span-12 lg:col-span-6 text-sm lg:text-md mx-3 my-3 bg-white/20 border-2 border-gray-200 rounded-2xl shadow">
      {/*Card exterior*/}
      <div className={isReady ? greenCard : grayCard}>
        <div className=" col-span-6 flex gap-2 items-center">
          <p className="text-left text-white"> Grupo {keyName}</p>
          {isReady ? <img src={iconRaffled} alt="icon" /> : null}
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
                <li className="">
                  {index + 1} {deportista["Nombre Deportista"]}
                </li>
                <p className="pl-12 mb-2  ">{deportista["Delegación"]}</p>
              </div>
            ))}
          </ul>
        </div>

        <div className="col-span-6 p-2">
          <div className="grid grid-cols-12 my-2 bg-white/30  rounded-lg ">
            <div className="col-span-6">
              <p className="mx-2 ">CATEGORÍA:</p>
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
              <p className="mx-2 ">GRADO:</p>
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
              <p className="mx-2 ">RAMA:</p>
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
              <p className="mx-2 ">DIVISIÓN:</p>
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
                  className=" m-4 px-5 py-2 rounded-lg font-medium border-2 border-white bg-white/30 transition duration-500 ease-in-out hover:bg-redbuttons hover:border-2 hover:border-redbuttons text-white "
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
