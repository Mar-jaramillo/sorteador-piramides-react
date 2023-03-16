import React, { useEffect, useState } from "react";
import Loader from "../layout/Loader";
import CardIndividual from "./CardIndividual";

export default function CardsBoard({ keysCode, groupsByCode, setisActive, }) {
  const [isLoad, setisLoad] = useState(false);

  useEffect(() => {
    keysCode.length > 0 && groupsByCode ? setisLoad(true) : null;
  }, [keysCode, groupsByCode]);

  return (
    <div className="grid grid-cols-12">
      {isLoad ? (
        keysCode.map((key) => (
          <CardIndividual setisActive={setisActive}  key={key} keyName={key} groupByCode={groupsByCode[key]} />
        ))
      ) : (
        // Loader
        <div className="col-span-12 grid place-content-center">
      <Loader mensaje="Cargando Grupos de Deportistas"/>
        </div>
      )}
    </div>
  );
}
