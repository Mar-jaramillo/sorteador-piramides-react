import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardsBoard from "../components/board/CardsBoard";
import HeaderBoard from "../components/board/HeaderBoard";
import SelectFliter from "../components/board/SelectFilter";
import BreadCrumb from "../components/layout/BreadCrumb";
import ModalTemplate from "../components/templatesPyramids/ModalTemplate";
import { getLocalStorage } from "../utils/getLocalStorage";
import GlobalContext from "../utils/GlobalContext";

export default function Board() {
  const context = useContext(GlobalContext);
  const [groupsByCode, setGroupsByCode] = useState({});
  const [keysOfGroups, setKeysOfGroups] = useState({});
  const [searchValue, setsearchValue] = useState(""); // el valor que viene del componente Selects
  const [filteredKeysOfGroups, setFilteredKeysOfGroups] = useState([]); // lo que le vamos a mandar a Selects
  const [typePyramid, setTypePyramid] = useState(2);
  const [isActive, setIsActive] = useState({ active: false });
  const [sorteado, setSorteado] = useState(0);
  const [sinSortear, setSinSortear] = useState(context.totalGroupsFiltered);
  const [isSorted, setIsSorted] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setSinSortear(context.totalGroupsFiltered);
  }, [context.totalGroupsFiltered]);

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

  const handleSorteo = (isSorted, add) => {
    if (isSorted) {
      setSorteado(sorteado + add);
      setSinSortear(sinSortear - add);
    } else {
      setSorteado(sorteado - add);
      setSinSortear(sinSortear + add);
    }
    setIsSorted(isSorted); // se actualiza el estado de isSorted en Board
  };

  return (
    <>
      <div id="board" className="px-32 pt-10 text-white">
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
            Sorteado {sorteado}
          </div>
          <div className="bg-white/50 px-2 py-1 font-bold rounded-md">
            Sin sortear{sinSortear}
            {""}
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
      {isActive.active ? (
       <div
       className="
         fixed top-0 left-0 z-50 w-full h-full 
         flex items-center justify-center 
         bg-gray-900 bg-opacity-75
       "
       // Aquí se agrega la lógica para activar/desactivar el modal
       style={{ display: isActive.active ? 'flex' : 'none' }}
     >
       <div className=" rounded-lg">
         <ModalTemplate
           sorteado={sorteado}
           keysOfGroups={keysOfGroups}
           setIsActive={setIsActive}
           typePyramid={typePyramid}
         />
       </div>
     </div>
      ) : null}
    </>
  );
}
