import React, { useContext } from "react";
import { getLocalStorage } from "../../utils/getLocalStorage";
import GlobalContext from "../../utils/GlobalContext";

export default function TableCategories() {
  const context = useContext(GlobalContext);

  const participantsOfCard = getLocalStorage("groupNow ") || context.groupNow;
  const dataParticipant = participantsOfCard.arrayGroup[0]["Categoría"]
    ? participantsOfCard.arrayGroup[0] // si existe que agregue ese ó
    : participantsOfCard.arrayGroup[1]["Categoría"] && // si no esta el otro compruebe este y lo agregue
      participantsOfCard.arrayGroup[1]; 

  return (
    <div className="grid grid-cols-12 max-w-lg rounded-2xl text-md text-gray-800 bg-gray-300/60">
      <ul className="font-medium col-span-6  p-2 m-3">
        <li className="w-full">CATEGORÍA</li>
        <li className="w-full">GRADO</li>
        <li className="w-full">RAMA</li>
        <li className="w-full">DIVISÍON</li>
      </ul>
      <ul className="col-span-6 p-2 m-3">
        <li className="w-full">{dataParticipant["Categoría"]}</li>
        <li className="w-full">{dataParticipant["Grado"]}</li>
        <li className="w-full">{dataParticipant["Rama"]}</li>
        <li className="w-full">{dataParticipant["División"]}</li>
      </ul>
    </div>
  );
}
