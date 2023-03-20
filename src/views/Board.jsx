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
  const [keysOfGroups, setKeysOfGroups] = useState({});
  const [groupsByCode, setGroupsByCode] = useState({});
  const [typePyramid, setTypePyramid] = useState(2);
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useLocation();

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

  return (
    <>
      <div id="board" className="px-32 pt-10 text-white">
        <BreadCrumb />
        <HeaderBoard />
        <SelectFliter
          setKeysOfGroups={setKeysOfGroups}
          setGroupsByCode={setGroupsByCode}
        />
        <CardsBoard
          keysOfGroups={keysOfGroups}
          groupsByCode={groupsByCode}
          setIsActive={setIsActive}
        />
      </div>
      {isActive ? (
        <div className="fixed top-0  left-0 w-full h-full grid place-content-center">
          <div className="z-10 bg-white rounded-lg w-full  overflow-auto p-8">
            <ModalTemplate
              setIsActive={setIsActive}
              typePyramid={typePyramid}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
