import React, { useContext, useEffect, useState } from "react";
import { selectFiltersKeys } from "../../consts/selectFiltersKeys";
import { getLocalStorage } from "../../utils/getLocalStorage";
import GlobalContext from "../../utils/GlobalContext";

export default function SelectFilter({
  groupsByCode,
  keysOfGroups,
  setFilteredKeysOfGroups,
  // handleCards,
  setListParamsSearch,
  listParamsSearch
}) {


  const context = useContext(GlobalContext);
  const [valuesSelect, setValuesSelect] = useState({});
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    setValuesSelect(getLocalStorage("valuesUniques"));
  }, []);

  const groups = groupsByCode || getLocalStorage("groupsByCode");


  const addParamsSearch = (e, filter) => {
    setNotFound(false)
    const valueTemp = e.target.value;
    listParamsSearch[filter] = valueTemp
    setListParamsSearch({...listParamsSearch})
  };

  const handleSearch = (e) => {
    console.log(listParamsSearch);
    e.preventDefault();
    const filteredKeys = [];
    for (const key of keysOfGroups) {
      const objParticipant = groups[key].arrayGroup[0];

      if (
        (objParticipant["Categoría"] === listParamsSearch["Categoría"] || listParamsSearch["Categoría"] === "Categoría") &&
        (objParticipant["Rama"] === listParamsSearch["Rama"] || listParamsSearch["Rama"] === "Rama" ) && 
        (objParticipant["Grado"] === listParamsSearch["Grado"] || listParamsSearch["Grado"] ==="Grado" ) &&
        (objParticipant["División"] == listParamsSearch["División"] || listParamsSearch["División"] == "División")
      ) {
        filteredKeys.push(key)
      }

    }
    console.log(filteredKeys);
    context.totalGroupsFiltered = filteredKeys.length;
    // handleCards(filteredKeys);
    filteredKeys.length > 0 ?
    setFilteredKeysOfGroups(filteredKeys)
    : setNotFound(true)
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-full mb-8">
      <div className="flex flex-col ">
        <form className="flex">
          {" "}
          <div className="flex">
            {selectFiltersKeys.map((filter) => {
              return (
                <div key={filter} className="flex flex-col mx-5">
                  <select
                    onChange={(e) => addParamsSearch(e, filter)}
                    className="select-filter w-40 border-2 hover:bg-greenPrimary  text-white bg-white/50 transition duration-500  font-semibold uppercase text-center rounded-lg py-3  shadow-lg text-md"
                  >
                    <option value={filter}>{filter}</option>
                    {valuesSelect[filter] &&
                      [
                        ...new Set(
                          valuesSelect[filter].map((val) =>
                            val.toString().trim()
                          )
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
          <button
            onClick={(e)=>handleSearch(e)}
            className="py-2 px-7 rounded-md border-2 "
          >
            Filtrar
          </button>
        </form>
      </div>
     {notFound ? <span className="text-yellow-500 px-5  my-2 w-full">No se encontraron resultados</span>: null}
    </div>
  );
}
