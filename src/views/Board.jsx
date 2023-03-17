import React, { useContext, useEffect, useState } from "react";
import CardsBoard from "../components/board/CardsBoard";
import HeaderBoard from "../components/board/HeaderBoard";
import SelectFliter from "../components/board/SelectFilter";
import BreadCrumb from "../components/layout/BreadCrumb";
import Layout from "../components/layout/Layout";
import ModalTemplate from "../components/templatesPyramids/ModalTemplate";
import { getLocalStorage } from "../utils/getLocalStorage";
import GlobalContext from "../utils/GlobalContext";

export default function Board() {
  const context = useContext(GlobalContext);
  const [keysOfGroups, setKeysOfGroups] = useState({});
  const [groupsByCode, setgroupsByCode] = useState({});
  const [typePyramid, setTypePyramid] = useState(3);
  const [isActive, setisActive] = useState(false);

  useEffect(() => {
    const keysOfGroups =
      getLocalStorage("keysOfGroups") || context.keysOfGroups;
    const groupsByCode =
      getLocalStorage("groupsByCode") || context.groupsByCode;
    setKeysOfGroups(keysOfGroups);
    setgroupsByCode(groupsByCode);
  }, []);

  return (
    <Layout>
      <div id="board" className="px-32 pt-10 text-white">
        <BreadCrumb />
        <HeaderBoard />
        <SelectFliter
          setKeysOfGroups={setKeysOfGroups}
          setgroupsByCode={setgroupsByCode}
        />
        <CardsBoard
          setisActive={setisActive}
          groupsByCode={groupsByCode}
          keysOfGroups={keysOfGroups}
        />
      </div>
      {isActive ? (
        <ModalTemplate setisActive={setisActive} typePyramid={typePyramid} />
      ) : null}
    </Layout>
  );
}
