import React, { useEffect, useState } from "react";
import { selectFiltersKeys } from "../../consts/selectFiltersKeys";
import { createGroupsByCode } from "../../utils/createGroupsByCode";
import { getLocalStorage } from "../../utils/getLocalStorage";
import obtenerPropiedadesUnicas from "../../utils/obtenerPropiedadesUnicas";

export default function SelectFliter({ setKeysCode, setgroupsByCode }) {
  const [valuesSelect, setValuesSelect] = useState({});

  useEffect(() => {
    const dataFromLocalStorage = getLocalStorage("excelData");
    const valuesUniques = obtenerPropiedadesUnicas(dataFromLocalStorage);
    setValuesSelect(valuesUniques);

    const groupsByCode = createGroupsByCode(dataFromLocalStorage);
    setgroupsByCode(groupsByCode)
    localStorage.setItem("groupsByCode", JSON.stringify(groupsByCode))

    const keys = Object.keys(groupsByCode)
    setKeysCode(keys)
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
