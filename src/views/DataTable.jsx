import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Finder from "../components/dataTable/Finder";
import Table from "../components/dataTable/Table";
import Layout from "../components/layout/Layout";
import Loader from "../components/layout/Loader";
import BreadCrumb from "../components/layout/BreadCrumb";
import GlobalContext from "../utils/GlobalContext";
import obtenerPropiedadesUnicas from "../utils/obtenerPropiedadesUnicas";
import { createGroupsByCode } from "../utils/createGroupsByCode";
import { getLocalStorage } from "../utils/getLocalStorage";

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

  useEffect(() => {
    const dataFromLocalStorage = getLocalStorage("excelData");
    const valuesUniques = obtenerPropiedadesUnicas(dataFromLocalStorage);

    const groupsByCode = createGroupsByCode(dataFromLocalStorage); //esto nos trae un objeto con objetos organizados por el código

    const keys = Object.keys(groupsByCode);

    context.totalGroups = keys.length;
    context.totalDelegations = valuesUniques["Delegación"].length;
    context.groupsByCode = groupsByCode;
    context.keysOfGroups = keys;
    context.valuesUniques = valuesUniques;
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
        <Loader />
      ) : (
        <div id="data" className=" h-screen text-white">
          <BreadCrumb />
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              <h2 className="text-left pb-6 px-32 text-3xl font-bold">
                Visualización de deportistas
              </h2>
            </div>
            <div className="text-right font-medium mr-36 col-span-6">
              <h3>{context.nameEvent}</h3>
              <div>
                <h3 alt="" />
                Total deportistas:{" "}
                {filteredPerson.length > 0
                  ? filteredPerson.length
                  : dataExcel.length}
              </div>
              <div>
                <h3 />
                Total delegaciones: {context.totalDelegations}
              </div>
              <div>
                <h3 />
                Total grupos: {context.totalGroups}
              </div>
            </div>
          </div>

          <div className="grid place-content-center">
            <div className="max-w-5xl grid grid-cols-12 mb-4">
              <Finder
                dataExcel={dataExcel}
                setSearchValue={setSearchValue}
                setFilteredPerson={setFilteredPerson}
              />
            </div>

            <div className="rounded-2xl bg-white/20 border">
              <Table dataExcel={dataExcel} filteredPerson={filteredPerson} />
            </div>

            <div className="flex justify-center gap-10 items-center  p-3 text-white">
              <Link
                to="/home"
                className="bg-white/30 border-2 border-white px-7 py-2 rounded-md"
              >
                Volver
              </Link>
              <button
                onClick={navigateBoard}
                className="bg-red-600 px-7 py-2 rounded-md"
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
