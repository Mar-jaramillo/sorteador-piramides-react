import React, { useContext, useEffect, useState } from "react";
import { getLocalStorage } from "../../utils/getLocalStorage";
import GlobalContext from "../../utils/GlobalContext";

export default function ButtonsGroup({
  keysOfGroups,
  groupsByCode,
  setFilteredKeysOfGroups,
}) {
  const context = useContext(GlobalContext);
  
  const [cardsRaffleds, setCardsRaffleds] = useState(0);
  const [notRaffled, setnotRaffled] = useState(
    context.totalGroups || getLocalStorage("totalGroups")
  );

  const keysOriginals = context.keysNoMutar || getLocalStorage("keysNoMutar")

  useEffect(() => {
    const keys =
      getLocalStorage("keysOfGroups") || context.keysOfGroups || keysOfGroups;
    const groups =
      getLocalStorage("groupsByCode") || context.groupsByCode || groupsByCode;

    let count = 0;
    for (let i = 0; i < keys.length; i++) {
      const keyTemp = keys[i];
      if (groups[keyTemp].isRaffled) {
        count++;
      }
    }
    setCardsRaffleds(count);
    setnotRaffled(count ? notRaffled - count : notRaffled);
  }, [context.groupsByCode]);

  const participants =
    context.totalGroupsFiltered > 0
      ? context.totalGroupsFiltered
      : context.keysOfGroups.length;

  const handleSearchRaffled = (e) => {
    e.preventDefault();
    const filteredKeysRaffled = [];
    for (const key of keysOfGroups) {
      const array = groupsByCode[key];
      if (array.isRaffled) {
        filteredKeysRaffled.push(key)
        context.totalGroupsFiltered = filteredKeysRaffled.length;
        setFilteredKeysOfGroups(filteredKeysRaffled);
      }
    }
  };
  const handleSearchNotRaffled = (e) => {
    e.preventDefault();
    const filteredKeysRaffled = [];
    for (const key of keysOfGroups) {
      const array = groupsByCode[key];
      if (!array.isRaffled) {
        filteredKeysRaffled.push(key)
        context.totalGroupsFiltered = filteredKeysRaffled.length;
        setFilteredKeysOfGroups(filteredKeysRaffled);
      }
    }
  };

  const HandleAllKeys =()=>{
    setFilteredKeysOfGroups(keysOriginals)
  }

  return (
    <div className="flex gap-3 px-3">
      <button onClick={HandleAllKeys} className="bg-white/50 px-2 py-1 font-bold rounded-md transition duration-500 ease-in-out hover:bg-white/25 ">
        Todos 
      </button>
      <button
        onClick={handleSearchRaffled}
        className="bg-white/50 px-2 py-1 font-bold rounded-md transition duration-500 ease-in-out hover:bg-greenPrimary"
      >
        Sorteado {cardsRaffleds}
      </button>
      <button onClick={handleSearchNotRaffled} className="bg-white/50 px-2 py-1 font-bold rounded-md transition duration-500 ease-in-out hover:bg-redPrimary">
        Sin sortear {notRaffled}
      </button>
    </div>
  );
}
