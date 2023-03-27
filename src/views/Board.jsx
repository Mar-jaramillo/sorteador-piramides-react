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


export default function Board() {
  const context = useContext(GlobalContext);
  context.cardNotRaffled =
    context.totalGroups || getLocalStorage("totalGroups");
  const { pathname } = useLocation();
  const [groupsByCode, setGroupsByCode] = useState({});
  const [keysOfGroups, setKeysOfGroups] = useState([]);
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
        <ButtonsGroup  setFilteredKeysOfGroups={setFilteredKeysOfGroups} keysOfGroups={keysOfGroups} groupsByCode={groupsByCode} />
        <CardsBoard
          filteredKeysOfGroups={filteredKeysOfGroups}
          keysOfGroups={keysOfGroups}
          groupsByCode={groupsByCode}
          setIsActive={setIsActive}
          isActive={isActive}
          setIsSorted={isSorted} // se pasa el estado de isSorted a CardsBoard
        />
      </div>

      <div className="flex flex-col bottom-8 items-end text-white">
        <p className="text-sm px-12">Desarrollado por:</p>
        <img className="h-10 mx-8 mb-5" src={logoqubulowhite} alt="" />
      </div>
    </div>
  );
}
