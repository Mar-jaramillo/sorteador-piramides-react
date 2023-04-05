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

  let cardsToRender = []
  // filteredKeysOfGroups.length
  //   ? filteredKeysOfGroups
  //   : keysOfGroups;

  useEffect(() => {
    keysOfGroups.length > 0 && groupsByCode && setisLoad(!isLoad);
    cardsToRender = keysOfGroups
  }, [keysOfGroups, groupsByCode]);

  useEffect(() => {
    
    cardsToRender = keysOfGroups
    console.log(keysOfGroups);
  }, [])
  

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
        <div className="col-span-12 h-screen grid place-content-center">
          Cargando grupos por codigo...
          {/* <Loader mensaje="Cargando Grupos de Deportistas" /> */}
        </div>
      )}
    </div>
  );
}
