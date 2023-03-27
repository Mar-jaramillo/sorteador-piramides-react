import React, { useContext, useEffect, useState } from "react";
import { getLocalStorage } from "../../utils/getLocalStorage";
import GlobalContext from "../../utils/GlobalContext";

export default function BotonGroup({ keysOfGroups, groupsByCode, setFilteredKeysOfGroups }) {
  const context = useContext(GlobalContext);
  const [cardsRaffleds, setCardsRaffleds] = useState(0);
  const [notRaffled, setnotRaffled] = useState(context.totalGroups || getLocalStorage("totalGroups"));
  
  useEffect(() => {  
    const keys = getLocalStorage("keysOfGroups") || context.keysOfGroups || keysOfGroups
    const groups = getLocalStorage("groupsByCode") || context.groupsByCode || groupsByCode
   
    let count = 0
    for (let i = 0; i < keys.length; i++) {
      const keyTemp = keys[i]
      if(groups[keyTemp].isRaffled){
        count++
      }
    }
    setCardsRaffleds(count)
    setnotRaffled(count ? notRaffled - count : notRaffled)
  }, [context.groupsByCode])


  const participants =
    context.totalGroupsFiltered > 0
      ? context.totalGroupsFiltered
      : context.keysOfGroups.length;

      // const handleSearch = (e) => {

      //   const filteredKeys = {};
      //   for (const key of keysOfGroups) {
      //     const array = groups[key];
      //     array.forEach((element) => {
      //       if (

      //       ) {
      //         filteredKeys[key] = true; // Agregar el grupo a la lista de filtrados
      //       }
      //     });
      //   }
      //   const filteredKeysList = Object.keys(filteredKeys); // Convertir el objeto en una lista
      //   context.totalGroupsFiltered = filteredKeysList.length;
       
      //   setFilteredKeysOfGroups(filteredKeysList);
      //   setsearchValue(valueSearch);
      // };

  return (
    <div className="flex gap-3 px-3">
      <div className="bg-white/50 px-2 py-1 font-bold rounded-md">
        Todos {participants}
      </div>
      <div className="bg-white/50 px-2 py-1 font-bold rounded-md">
        Sorteado {cardsRaffleds}
      </div>
      <div className="bg-white/50 px-2 py-1 font-bold rounded-md">
        Sin sortear {notRaffled}
      </div>
    </div>
  );
}
