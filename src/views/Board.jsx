import React, { useContext, useEffect, useState } from "react";
import { json, useLocation } from "react-router-dom";
import CardsBoard from "../components/board/CardsBoard";
import HeaderBoard from "../components/board/HeaderBoard";
import SelectFilter from "../components/board/SelectFilter";
import BreadCrumb from "../components/layout/BreadCrumb";
import { getLocalStorage } from "../utils/getLocalStorage";
import GlobalContext from "../utils/GlobalContext";
import logoqubulowhite from "../assets/logos/logoqubulowhite.png";
import ButtonsGroup from "../components/board/ButtonsGroup";
import Loader from "../components/layout/Loader";

export default function Board() {
  const context = useContext(GlobalContext);
  context.cardNotRaffled =
    context.totalGroups || getLocalStorage("totalGroups");
  const { pathname } = useLocation();
  const [groupsByCode, setGroupsByCode] = useState({});
  const [keysOfGroups, setKeysOfGroups] = useState([]);
  const [filteredKeysOfGroups, setFilteredKeysOfGroups] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const [isLoading, setisLoading] = useState(true);
  const [listParamsSearch, setListParamsSearch] = useState({
    Categoría: "Categoría",
    Rama: "Rama",
    Grado: "Grado",
    División: "División",
  });

  useEffect(() => {
    const changePageTitle = () => {
      const newPageTitle = "Grupos de deportistas";
      pathname === "/board" && (document.title = newPageTitle);
    };
    changePageTitle();
  }, []);

  useEffect(() => {
    setKeysOfGroups(getLocalStorage("keysOfGroups") || context.keysOfGroups);
    setGroupsByCode(getLocalStorage("groupsByCode") || context.groupsByCode);
    setTimeout(() => {
      setisLoading(false);
    }, 500);
  }, []);

  return (
  <>
   {isLoading ? (
          <Loader mensaje="Cargando Grupos de Deportistas" />
        ) : (
    <div id="board" className={keysOfGroups.length < 3 ? "fadeinfast min-h-screen":"fadeinfast h-full"}>

            <div className="px-32 pt-10 text-white min-h-screen">
              <BreadCrumb />
              <HeaderBoard />
              <SelectFilter
                keysOfGroups={keysOfGroups}
                setKeysOfGroups={setKeysOfGroups}
                setGroupsByCode={setGroupsByCode}
                groupsByCode={groupsByCode}
                setFilteredKeysOfGroups={setFilteredKeysOfGroups}
 
                setListParamsSearch={setListParamsSearch}
                listParamsSearch={listParamsSearch}
              />
       
                <ButtonsGroup
                  setFilteredKeysOfGroups={setFilteredKeysOfGroups}
                  keysOfGroups={keysOfGroups}
                  groupsByCode={groupsByCode}
                  filteredKeysOfGroups={filteredKeysOfGroups}
                />
  
              <CardsBoard
                filteredKeysOfGroups={filteredKeysOfGroups}
                keysOfGroups={keysOfGroups}
                groupsByCode={groupsByCode}
                setIsActive={setIsActive}
                isActive={isActive}
              />
            </div>
          
        
 
      <div className="w-full flex justify-end p-8 text-white  ">
        <div className="flex flex-col ">
          <p className="text-sm">Desarrollado por:</p>
          <a target="_blank" rel="noopener noreferrer" href="https://qubilo.com">
            <img className="h-10" src={logoqubulowhite} alt="" />
          </a>
        </div>
      </div>
    </div>
    )}
    </>  
  );
}
