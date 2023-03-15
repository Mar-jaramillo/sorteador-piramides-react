
import React, { useContext, useEffect, useState } from "react";
import CardsBoard from "../components/board/CardsBoard";
import HeaderBoard from "../components/board/HeaderBoard";
import SelectFliter from "../components/board/SelectFilter";
import BreadCrumb from "../components/layout/BreadCrumb";
import Layout from "../components/layout/Layout";l
import ModalTemplate from "../components/templates-pyramids/ModalTemplate";
import GlobalContext from "../utils/GlobalContext";

export default function Board() {
  const context = useContext(GlobalContext);
  const [keysCode, setKeysCode] = useState([]);
  const [groupsByCode, setgroupsByCode] = useState({});
  const [typePyramid, setTypePyramid] = useState(3);
  const [amountParticipants, setAmountParticipants] = useState(0);
  const [isActive, setisActive] = useState(false);

  useEffect(() => {
    setTypePyramid(context.typePyramid);
    setAmountParticipants(context.amountParticipants);

  }, [context.amountParticipants, context.typePyramid]);



  return (
    <Layout>
      <div id="board" className="px-32 pt-10 text-white ">
        <BreadCrumb />
        <HeaderBoard amount={keysCode.length} />
        <SelectFliter
          setKeysCode={setKeysCode}
          setgroupsByCode={setgroupsByCode}
        />
        <CardsBoard
          setisActive={setisActive}
          groupsByCode={groupsByCode}
          keysCode={keysCode}

        />
      </div>
      {isActive ? <ModalTemplate   setisActive={setisActive} typePyramid={typePyramid} /> : null}
    </Layout>
  );
}
