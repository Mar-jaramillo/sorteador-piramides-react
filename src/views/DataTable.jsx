import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Finder from "../components/dataTable/Finder";
import Table from "../components/dataTable/Table";
import Loader from "../components/layout/Loader";
import BreadCrumb from "../components/layout/BreadCrumb";
import GlobalContext from "../utils/GlobalContext";
import FooterGeneral from "../components/layout/FooterGeneral";
import { getLocalStorage } from "../utils/getLocalStorage";

export default function DataTable() {
  const { pathname } = useLocation();

  useEffect(() => {
    const changePageTitle = () => {
      const newPageTitle = "Tabla Deportistas";
      pathname === "/data" && (document.title = newPageTitle);
    };
    changePageTitle();
  }, []);

  const context = useContext(GlobalContext);
  const [dataExcel, setDataExcel] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredPerson, setFilteredPerson] = useState(dataExcel);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const json = localStorage.getItem("excelData");
    if (json !== null) {
      const data = JSON.parse(json);
      setDataExcel(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, []);
  const navigateBoard = (e) => {
    e.preventDefault();
    navigate("/board");
  };

  return (
    <>
      {isLoading ? (
        <Loader mensaje="Cargando Consolidado de Deportistas..." />
      ) : (
        <>
          <div id="data" className="fadeinfast h-screen grid place-content-center  text-white">
            <div className=" h-full grid place-content-center  max-w-5xl">
              <BreadCrumb />
              <div className="grid grid-cols-12">
                <div className="col-span-6 flex flex-col">
                  <h2 className="text-left text-3xl font-bold mb-3">
                    Visualización de Deportistas
                  </h2>
                  <Finder
                    dataExcel={dataExcel}
                    setSearchValue={setSearchValue}
                    setFilteredPerson={setFilteredPerson}
                  />
                </div>
                <div className="text-right col-span-6 mb-2 ">
                <h3 className="font-bold text-lg uppercase text-right truncate" title={context.nameEvent}>
    {context.nameEvent || getLocalStorage("nameEvent")}
                  </h3>
                  <div>
                    <h3 />
                    Total grupos:{" "}
                    {context.totalGroups || localStorage.getItem("totalGroups")}
                  </div>
                  <div>
                    <h3 />
                    Total delegaciones:{" "}
                    {context.totalDelegations ||
                      localStorage.getItem("totalDelegations")}
                  </div>
                  <div>
                    <h3 alt="" />
                    Total deportistas:{" "}
                    {filteredPerson.length > 0
                      ? filteredPerson.length
                      : dataExcel.length}
                  </div>             
                </div>
              </div>

              <div className="rounded-2xl bg-white/20 border">
                <Table dataExcel={dataExcel} filteredPerson={filteredPerson} />
              </div>

              <div className="flex justify-center text-center gap-5 items-center mt-2 p-3 text-white">
                <Link
                  to="/home"
                  className="bg-white/30 border border-white w-32 py-2 rounded-md hover:border-gray-400"
                >
                  &lt;&lt; Volver
                </Link>
                <button
                  onClick={navigateBoard}
                  className="bg-red-600 border border-gray-700 w-32 py-2 rounded-md hover:border-red-700"
                >
                  Ver grupos
                </button>
              </div>
            </div>
          </div>
          <FooterGeneral />
        </>
      )}
    </>
  );
}
