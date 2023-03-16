import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Finder from "../components/dataTable/Finder";
import Table from "../components/dataTable/Table";
import Layout from "../components/layout/Layout";
import Loader from "../components/layout/Loader";
import BreadCrumb from "../components/layout/BreadCrumb";
import GlobalContext from "../utils/GlobalContext";

export default function DataTable() {
  const context = useContext(GlobalContext);
  const [dataExcel, setDataExcel] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredPerson, setFilteredPerson] = useState(dataExcel);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const json = localStorage.getItem("excelData");
    if (json !== null) {
      const data = JSON.parse(json);
      setDataExcel(data);
    }
  }, []);
  const navigateBoard = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/board");
    }, 1000);
  };

  return (
    <Layout>
      {isLoading ? (
        <Loader mensaje='Cargando Grupos de Deportistas'/>
      ) : (
        <div id="data" className="h-screen text-white">
          <div className="h-full grid place-content-center ">
            <BreadCrumb />
            <div className="grid grid-cols-12">
              <div className="col-span-6 flex flex-col">
                <h2 className="text-left text-3xl font-bold mb-3">
                  Visualización de deportistas
                </h2>
                <Finder
                  dataExcel={dataExcel}
                  setSearchValue={setSearchValue}
                  setFilteredPerson={setFilteredPerson}
                />
              </div>
              <div className="text-right font-medium col-span-6 mb-2">
                <h3 className=" first-letter:uppercase">{context.nameEvent || localStorage.getItem("nameEvent")}</h3>
                <div>
                  <h3 alt="" />
                  Total deportistas:{" "}
                  {filteredPerson.length > 0
                    ? filteredPerson.length
                    : dataExcel.length}
                </div>
                <div>
                  <h3 />
                  Total delegaciones: {context.totalDelegations || localStorage.getItem("totalDelegations")}
                </div>
                <div>
                  <h3 />
                  Total grupos: {context.totalGroups || localStorage.getItem("totalGroups")}
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/20 border">
              <Table dataExcel={dataExcel} filteredPerson={filteredPerson} />
            </div>

            <div className="flex justify-center text-center gap-5 items-center mt-2 p-3 text-white">
              <Link
                to="/home"
                className="bg-white/30 border border-white w-32 py-2 rounded-md"
              >
                &lt;&lt; Volver
              </Link>
              <button
                onClick={navigateBoard}
                className="bg-red-600 border border-gray-700 w-32 py-2 rounded-md"
              >
                Ver grupos
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
