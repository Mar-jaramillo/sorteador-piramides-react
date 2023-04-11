import React, { useContext } from "react";
import GlobalContext from "../../utils/GlobalContext";
import { getLocalStorage } from "../../utils/getLocalStorage";

export default function HeaderBoard() {
  const context = useContext(GlobalContext)
  return (
    <div className="flex justify-between   mb-12">
      {/* Section Title and menu header*/}
      <div>
        <h2 className="text-3xl font-bold ">
          Grupos de Competidores
        </h2>
        <h3>{context.nameEvent || getLocalStorage("nameEvent")}</h3>
      </div>

    </div>
  );
}
