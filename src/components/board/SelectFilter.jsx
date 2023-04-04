import React, { useContext, useEffect, useState } from "react";
import { selectFiltersKeys } from "../../consts/selectFiltersKeys";
import { getLocalStorage } from "../../utils/getLocalStorage";
import GlobalContext from "../../utils/GlobalContext";

export default function SelectFilter({
  groupsByCode,
  keysOfGroups,
  setFilteredKeysOfGroups,
  setsearchValue,
}) {
  const context = useContext(GlobalContext);
  const [valuesSelect, setValuesSelect] = useState({});

  useEffect(() => {
    setValuesSelect(getLocalStorage("valuesUniques"));
  }, []);

  const groups = groupsByCode || getLocalStorage("groupsByCode");

  const handleSearch = (e) => {
    const valueSearch = e.target.value;
    const filteredKeys = {};
    for (const key of keysOfGroups) {
      const array = groups[key].arrayGroup;
      array.forEach((element) => {
        if (
          element["Delegación"] === valueSearch ||
          element["Rama"] === valueSearch ||
          element["Categoría"] === valueSearch ||
          element["Grado"] === valueSearch ||
          element["División"] === valueSearch
        ) {
          filteredKeys[key] = true; // Agregar el grupo a la lista de filtrados
        }
      });
    }
    const filteredKeysList = Object.keys(filteredKeys); // Convertir el objeto en una lista
    context.totalGroupsFiltered = filteredKeysList.length;

    setFilteredKeysOfGroups(filteredKeysList);
    setsearchValue(valueSearch);
  };

  return (
    <div className="flex items-center justify-center min-w-full mb-16">
      <div className="flex flex-col ">
        <div className="flex">
          {selectFiltersKeys.map((filter, i) => {
            return (
              <div key={i} className="flex flex-col mx-5">
                <select
                  onChange={handleSearch}
                  className="select-filter w-40 border-2 hover:bg-greenPrimary  text-white bg-white/50 transition duration-500  font-semibold uppercase text-center rounded-lg py-3  shadow-lg text-md"
                >
                  <option className="">{filter}</option>
                  {valuesSelect[filter] &&
                    [
                      ...new Set(
                        valuesSelect[filter].map((val) => val.toString().trim())
                      ),
                    ]
                      .filter(
                        (option) =>
                          typeof option === "string" ||
                          typeof option === "number"
                      )
                      .filter((option) => option.toString().trim() !== "") // Filtrar opciones vacías
                      .sort((a, b) => {
                        // Usar a.toString() si a no es una cadena de texto
                        const aString =
                          typeof a === "string" ? a : a.toString();
                        // Usar b.toString() si b no es una cadena de texto
                        const bString =
                          typeof b === "string" ? b : b.toString();
                        return aString.localeCompare(bString);
                      }) // Ordenar los datos alfabéticamente
                      .map((option, j) => {
                        return (
                          <option key={j} value={option}>
                            {option.toString().replace(/,/g, "")}
                          </option>
                        );
                      })}
                </select>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
