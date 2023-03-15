import React, { useContext, useEffect, useState } from "react";
import { selectFiltersKeys } from "../../consts/selectFiltersKeys";
import GlobalContext from "../../utils/GlobalContext";

export default function SelectFliter({ setgroupsByCode }) {
  const context = useContext(GlobalContext);
  const [valuesSelect, setValuesSelect] = useState({});

  useEffect(() => {
    setValuesSelect(context.valuesUniques);
 
 
    setgroupsByCode(context.groupsByCode);
 
  }, []);

  return (
    <div className="flex items-center justify-center min-w-full mb-16">
      <div className="flex flex-col ">
        <div className="flex">
          {selectFiltersKeys.map((filter, i) => (
            <div key={i} className="flex flex-col mx-5">
              <label className="mb-2 text-sm font-medium text-center">
                {filter}
              </label>
              <select className="w-36 border-2 bg-white/20  rounded-lg py-3 px-4 shadow-lg text-sm">
                <option value=""></option>
                {valuesSelect[filter] &&
                  valuesSelect[filter].map((option, j) => (
                    <option key={j} value={option}>
                      {option}
                    </option>
                  ))}
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
