import React, { useEffect, useState } from "react";
import Loader from "../layout/Loader";
import CardIndividual from "./CardIndividual";

export default function CardsBoard({
  keysOfGroups,
  groupsByCode,
  setIsActive,
  isActive,
  filteredKeysOfGroups,
  handleSorteo,
  setIsSorted
  
}) {
  const handleClick = (code, index) => {
    setIsActive({ active: false, code: code });
    setIsSorted(true); // aquí se utiliza setIsSorted
  };
  const [isLoad, setisLoad] = useState(false);
  const cardsToRender = filteredKeysOfGroups.length ? filteredKeysOfGroups : keysOfGroups;

  useEffect(() => {
    keysOfGroups.length > 0 && groupsByCode && setisLoad(!isLoad);
  }, [keysOfGroups, groupsByCode]);

  return (
    <div className="grid grid-cols-12">
      {isLoad ? (
        cardsToRender.map((key) => (
          <CardIndividual
            setIsActive={setIsActive}
            isActive={isActive}
            key={key}
            keyName={key}
            groupByCode={groupsByCode[key]}
            handleSorteo = {handleSorteo}
            handleClick={() => handleClick(key, index)}
            setIsSorted={setIsSorted} // se pasa setIsSorted como una prop
          />
        ))
      ) : (
        // Loader
        <div className="col-span-12 h-screen grid place-content-center">
          <Loader mensaje="Cargando Grupos de Deportistas" />
        </div>
      )}
    </div>
  );
}
