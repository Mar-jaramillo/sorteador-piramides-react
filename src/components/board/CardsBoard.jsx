import React, { useEffect, useState } from "react";
import CardIndividual from "./CardIndividual";

export default function CardsBoard({
  keysOfGroups,
  groupsByCode,
  setIsActive,
  isActive,
  filteredKeysOfGroups,
  handleSorteo,
}) {
  const handleClick = () => {
    setIsActive({ active: false });
  };
  const [isLoad, setisLoad] = useState(false);
const [cardsToRender, setCardsToRender] = useState(keysOfGroups)
 
  useEffect(() => {
    keysOfGroups.length > 0 && groupsByCode && setisLoad(!isLoad);
  }, [keysOfGroups, groupsByCode]);

  useEffect(() => {
    filteredKeysOfGroups.length > 0 && setCardsToRender(filteredKeysOfGroups)
  }, [filteredKeysOfGroups])
  


  return (
 
    <div className="fadeInDown grid grid-cols-12">
      {isLoad ? (
        cardsToRender.map((key) => (
          <CardIndividual
            groupsByCode={groupsByCode}
            setIsActive={setIsActive}
            isActive={isActive}
            key={key}
            keyName={key}
            groupNow={groupsByCode[key]}
            handleSorteo={handleSorteo}
            handleClick={() => handleClick(key, index)}
          />
        ))
      ) : (
        // Loader
        <div className="min-h-screen col-span-12 grid place-content-center">
          Cargando grupos por codigo...
          {/* <Loader mensaje="Cargando Grupos de Deportistas" /> */}
        </div>
      )}
    </div>
 
  );
}
