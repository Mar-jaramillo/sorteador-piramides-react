import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CardsBoard from "../components/board/CardsBoard";
import HeaderBoard from "../components/board/HeaderBoard";
import SelectFliter from "../components/board/SelectFilter";
import BreadCrumb from "../components/layout/BreadCrumb";
import { getLocalStorage } from "../utils/getLocalStorage";
import GlobalContext from "../utils/GlobalContext";
import logoqubulowhite from "../assets/logos/logoqubulowhite.png";

export default function Board() {

  const context = useContext(GlobalContext);
  context.cardNotRaffled =  context.totalGroups || getLocalStorage("totalGroups")
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [groupsByCode, setGroupsByCode] = useState({});
  const [keysOfGroups, setKeysOfGroups] = useState({});
  const [searchValue, setsearchValue] = useState("");  
  const [filteredKeysOfGroups, setFilteredKeysOfGroups] = useState([]);  
  const [isActive, setIsActive] = useState(false);
  const [sorteado, setSorteado] = useState(0);
  const [sinSortear, setSinSortear] = useState(0);  
  const [isSorted, setIsSorted] = useState(false);


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
  }, []);

  useEffect(() => {
    setSorteado(context.raffledCard);
  }, [context.raffledCard]);

  //Recibe el valor de is sorted y la suma o resta en SetSinSortear
  const handleSorteo = (isSorted, add) => {
    if (isSorted) {
      let sumSorted = sorteado + add;
      context.raffledCard = sumSorted;
      setSinSortear(context.totalGroups--)
    } else {
      let sumSorted = sorteado - add;
      context.raffledCard = sumSorted;

      let notRaffled = sinSortear + add;
      context.cardNotRaffled = notRaffled;
    }
    setIsSorted(isSorted); // se actualiza el estado de isSorted en Board
  };

  return (
    <div id="board" className="h-full ">
      <div className="px-32 pt-10 text-white">
        <BreadCrumb />
        <HeaderBoard />
        <SelectFliter
          setsearchValue={setsearchValue}
          keysOfGroups={keysOfGroups}
          setKeysOfGroups={setKeysOfGroups}
          setGroupsByCode={setGroupsByCode}
          groupsByCode={groupsByCode}
          setFilteredKeysOfGroups={setFilteredKeysOfGroups}
        />
        <div className="flex gap-3">
          <div className="bg-white/50 px-2 py-1 font-bold rounded-md">
            Todos{" "}
            {context.totalGroupsFiltered > 0
              ? context.totalGroupsFiltered
              : keysOfGroups.length}{" "}
          </div>
          <div className="bg-white/50 px-2 py-1 font-bold rounded-md">
            Sorteado {context.raffledCard}
          </div>
          <div className="bg-white/50 px-2 py-1 font-bold rounded-md">
            Sin sortear {context.cardNotRaffled}
          </div>
        </div>
        <CardsBoard
          filteredKeysOfGroups={filteredKeysOfGroups}
          keysOfGroups={keysOfGroups}
          groupsByCode={groupsByCode}
          setIsActive={setIsActive}
          handleSorteo={handleSorteo}
          setIsSorted={isSorted} // se pasa el estado de isSorted a CardsBoard
        />
      </div>

      {isActive ? (
        <div
          className="
         fixed top-0 left-0 z-50 w-full h-full
         flex items-center justify-center 
         bg-gray-900 bg-opacity-75
       "
          // Aquí se agrega la lógica para activar/desactivar el modal
          style={{ display: isActive ? "flex" : "none" }}
        >
          <div
            className={
              // activeDetails === true
              // ? "h-screen w-full  bg-white rounded-lg p-16 overflow-auto":
              "h-96 w-96 grid place-content-center bg-white rounded-lg  p-2"
            }
          >
            <h1>Sorteando...</h1>
            {setTimeout(() => {
              navigate("/templates");
            }, 3000)}
          </div>
        </div>
      ) : null}
      <div className="flex flex-col bottom-8 items-end text-white">
        <p className="text-sm px-12">Desarrollado por:</p>
        <img className="h-16" src={logoqubulowhite} alt="" />
      </div>
    </div>
  );
}
