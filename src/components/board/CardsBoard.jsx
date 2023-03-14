import React, { useEffect, useState } from "react";
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
          <svg
            className="animate-spin h-12 w-12"
            viewBox="0 0 24 24"
            style={{ animationDuration: "0.75s" }}
          >
            <defs>
              <linearGradient id="gradient" x1="0" x2="1">
                <stop offset="0%" stopColor="#FF3602" />
                <stop offset="100%" stopColor="#FFF" />
              </linearGradient>
            </defs>
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="80 50"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
