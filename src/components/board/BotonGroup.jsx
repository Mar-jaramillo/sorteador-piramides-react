import React, { useContext, useEffect, useState } from "react";
import { getLocalStorage } from "../../utils/getLocalStorage";
import GlobalContext from "../../utils/GlobalContext";

export default function BotonGroup({ keysOfGroups }) {
  const context = useContext(GlobalContext);
  const [notRaffled, setNotRaffled] = useState(context.cardNotRaffled)

  useEffect(() => {  
    setNotRaffled(context.raffledCards - context.cardNotRaffled)
  }, [context.raffledCards])
  
  const participants =
    context.totalGroupsFiltered > 0
      ? context.totalGroupsFiltered
      : context.keysOfGroups.length;

  return (
    <div className="flex gap-3 px-3">
      <div className="bg-white/50 px-2 py-1 font-bold rounded-md">
        Todos {participants}
      </div>
      <div className="bg-white/50 px-2 py-1 font-bold rounded-md">
        Sorteado {context.raffledCards}
      </div>
      <div className="bg-white/50 px-2 py-1 font-bold rounded-md">
        Sin sortear {notRaffled}
      </div>
    </div>
  );
}
