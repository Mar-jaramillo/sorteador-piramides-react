import React, { useContext, useEffect, useState } from "react";
import { selectFiltersKeys } from "../../consts/selectFiltersKeys";
import { getLocalStorage } from "../../utils/getLocalStorage";
import GlobalContext from "../../utils/GlobalContext";
import iconCleanFilter from "../../assets/icons/iconCleanFilter.png";
import iconFilter from "../../assets/icons/iconFilter.png";

export default function SelectFilter({
  groupsByCode,
  keysOfGroups,
  setFilteredKeysOfGroups,
  // handleCards,
  setListParamsSearch,
  listParamsSearch,
}) {
  const context = useContext(GlobalContext);
  const [valuesSelect, setValuesSelect] = useState({});
  const [notFound, setNotFound] = useState(false);
   const keysOriginals = context.keysNoMutar || getLocalStorage("keysNoMutar");

  useEffect(() => {
    setValuesSelect(getLocalStorage("valuesUniques"));
  }, []);

  const groups = groupsByCode || getLocalStorage("groupsByCode");

  const cleanFilter = (e) => {
    e.preventDefault();
     setFilteredKeysOfGroups(keysOriginals);

  };

  const addParamsSearch = (e, filter) => {
    setNotFound(false);
    const valueTemp = e.target.value;
    listParamsSearch[filter] = valueTemp;
    setListParamsSearch({ ...listParamsSearch });
  };

  const handleSearch = (e) => {
     e.preventDefault();
    const filteredKeys = [];
    for (const key of keysOfGroups) {
      const objParticipant = groups[key].arrayGroup[0];

      if (
        (objParticipant["Categoría"] === listParamsSearch["Categoría"] ||
          listParamsSearch["Categoría"] === "Categoría") &&
        (objParticipant["Rama"] === listParamsSearch["Rama"] ||
          listParamsSearch["Rama"] === "Rama") &&
        (objParticipant["Grado"] === listParamsSearch["Grado"] ||
          listParamsSearch["Grado"] === "Grado") &&
        (objParticipant["División"] == listParamsSearch["División"] ||
          listParamsSearch["División"] == "División")
      ) {
        filteredKeys.push(key);
      }
    }
    console.log(filteredKeys);
    context.totalGroupsFiltered = filteredKeys.length;
    localStorage.setItem("amountfilteredKeys", JSON.stringify(filteredKeys.length))
    // handleCards(filteredKeys);
    filteredKeys.length > 0
      ? setFilteredKeysOfGroups(filteredKeys)
      : setNotFound(true);
  };

  return (
    <div className="flex pb-8 flex-col items-center justify-center min-w-full mb-8">
      <div className="flex flex-col ">
      <div className="flex">
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
          <div className="mx-5">
          <button
            onClick={(e) => handleSearch(e)}
            className="flex bg-greenPrimary py-3 px-2 font-bold rounded-md transition duration-500 ease-in-out hover:bg-white/25 "
          >
             <img className="pr-2" src={iconFilter} alt="" />
            Filtrar
          </button>
          </div>
        </form>
        <div className="gap-3">
          <button
            onClick={cleanFilter}
            className="flex bg-redbuttons  py-3 px-2  font-bold rounded-md transition duration-500 ease-in-out hover:bg-white/25 "
          >
            <img className="pr-1" src={iconCleanFilter} alt=""  />
            Limpiar
          </button>
        </div>
        </div>
       
      </div>
      {notFound ? (
        <span className="text-yellow-500 px-5 py-10 my-2 w-full text-center">
          <img src="" alt="" />
          No se encontraron resultados
        </span>
      ) : null}
    </div>
  );
}
