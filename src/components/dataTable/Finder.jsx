import React from "react";

export default function Finder({
  dataExcel,
  setFilteredPerson,
  setSearchValue,
}) {
  const handleSearch = (e) => {
    const searchValue = e.target.value;

    const filteredArray = dataExcel.filter((deportista) => {
      console.log(deportista);
      return (
        (deportista["CBTE IND"] &&
          deportista["CBTE IND"].toLowerCase().includes(searchValue.toLowerCase())) ||
        (deportista["Delegación"] &&
          deportista["Delegación"].toLowerCase().includes(searchValue.toLowerCase())) ||
        (deportista["Nombre Deportista"] &&
          deportista["Nombre Deportista"].toLowerCase().includes(searchValue.toLowerCase()))
      );
    });
    setFilteredPerson(filteredArray);
    setSearchValue(searchValue);
  };

  return (
    <div className=" w-80 ">
      <div className="relative ">
        <div className="absolute inset-y-0 rigth-0 flex items-center pl-3 ">
          <svg
            className="w-5 h-5  "
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          autoComplete="off"
          onChange={handleSearch}
          type="text"
          id="table-search"
          className="pl-10 py-2 border text-sm rounded-md bg-white/25 w-full focus:outline-gray-400"
          placeholder="Buscar competidores, delegaciones, codigo..."
        />
      </div>
    </div>
  );
}
