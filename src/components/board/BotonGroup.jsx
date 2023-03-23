import React, { useContext } from "react";
import GlobalContext from "../../utils/GlobalContext";

export default function BotonGroup({keysOfGroups}) {
    const context = useContext(GlobalContext)
  return (
    <div className="flex gap-3 px-3">
      <div className="bg-white/50 px-2 py-1 font-bold rounded-md">
        Todos{" "}
        {context.totalGroupsFiltered > 0
          ? context.totalGroupsFiltered
          : 0}{" "}
      </div>
      <div className="bg-white/50 px-2 py-1 font-bold rounded-md">
        Sorteado {context.raffledCard}
      </div>
      <div className="bg-white/50 px-2 py-1 font-bold rounded-md">
        Sin sortear {context.cardNotRaffled}
      </div>
    </div>
  );
}
