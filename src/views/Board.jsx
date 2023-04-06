import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CardsBoard from "../components/board/CardsBoard";
import HeaderBoard from "../components/board/HeaderBoard";
import SelectFliter from "../components/board/SelectFilter";
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
  const [isSorted, setIsSorted] = useState(false);
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

  // const handleCards = (filteredKeys) => {
  //   console.log(filteredKeys);
  //   setFilteredKeysOfGroups(filteredKeys);
  // };

  return (
    <>
      {isLoading ? (
        <Loader mensaje="Cargando Grupos de Deportistas" />
      ) : (
        <div
          id="board"
          className={
            keysOfGroups.length < 2
              ? "fadeinfast h-screen"
              : "fadeinfast h-full"
          }
        >
          <div className="px-32 pt-10 text-white h-full">
            <BreadCrumb />
            <HeaderBoard />
            <SelectFliter
              keysOfGroups={keysOfGroups}
              setKeysOfGroups={setKeysOfGroups}
              setGroupsByCode={setGroupsByCode}
              groupsByCode={groupsByCode}
              setFilteredKeysOfGroups={setFilteredKeysOfGroups}
              // handleCards={handleCards}
              setListParamsSearch={setListParamsSearch}
              listParamsSearch={listParamsSearch}
            />
            <ButtonsGroup
              setFilteredKeysOfGroups={setFilteredKeysOfGroups}
              keysOfGroups={keysOfGroups}
              groupsByCode={groupsByCode}
            />
            <CardsBoard
              filteredKeysOfGroups={filteredKeysOfGroups}
              keysOfGroups={keysOfGroups}
              groupsByCode={groupsByCode}
              setIsActive={setIsActive}
              isActive={isActive}
            />
          </div>

          <div
            className={
              keysOfGroups.length < 2
                ? "flex flex-col bottom-8 right-8  fixed text-white "
                : "flex flex-col p-4 items-end text-white "
            }
          >
            <p className="text-sm">Desarrollado por:</p>
            <a href="https://qubilo.com/">
              <img className="h-10" src={logoqubulowhite} alt="" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
