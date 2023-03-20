import React, { useContext, useEffect, useState } from "react";
import { selectFiltersKeys } from "../../consts/selectFiltersKeys";
import { getLocalStorage } from "../../utils/getLocalStorage";
import GlobalContext from "../../utils/GlobalContext";

export default function SelectFilter({
  groupsByCode,
  setKeysOfGroups,
  setGroupsByCode,
  keysOfGroups,
  setFilteredKeysOfGroups,
  setsearchValue,
}) {
  const context = useContext(GlobalContext);
  const [valuesSelect, setValuesSelect] = useState({});
  const [keysGroups, setKeysGroups] = useState([]);
  const [filteredKeys, setFilteredKeys] = useState([]);

  useEffect(() => {
    setValuesSelect(context.valuesUniques || getLocalStorage("valuesUniques"));
    setGroupsByCode(context.groupsByCode || getLocalStorage("groupsByCode"));
    setKeysGroups(context.keysGroups);
  }, []);
  const handleSearch = (e) => {
    const valueSearch = e.target.value;
    const filteredKeys = [];
    for (const key of keysOfGroups) {
      const array = groupsByCode[key];
      array.forEach((element) => {
        if (
          element["Delegación"] === valueSearch ||
          element["Rama"] === valueSearch ||
          element["Categoría"] === valueSearch ||
          element["Grado"] === valueSearch ||
          element["División"] === valueSearch ||
          !filteredKeys.includes(key) 
        ) {
          filteredKeys.push(key);
        }
      });
    }
    context.totalGroupsFiltered=filteredKeys.length;
    console.log(filteredKeys);

    setFilteredKeys(filteredKeys);
    setFilteredKeysOfGroups(filteredKeys);
    setsearchValue(valueSearch);
  };

  return (
    <div className="flex items-center justify-center min-w-full mb-16">
      <div className="flex flex-col ">
        <div className="flex">
          {selectFiltersKeys.map((filter, i) => (
            <div key={i} className="flex flex-col mx-5">
              <select
                onChange={handleSearch}
                className="w-40 border-2 bg-white/50 transition duration-500 hover:bg-white/10 font-semibold uppercase text-center rounded-lg py-3 px-4 shadow-lg text-md"
              >
                <option className="">{filter}</option>
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
