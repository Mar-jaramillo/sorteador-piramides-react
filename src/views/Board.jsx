import React, { useContext, useState } from "react";
import CardsBoard from "../components/board/CardsBoard";
import SelectFliter from "../components/board/SelectFilter";
import BreadCrumb from "../components/layout/BreadCrumb";

import Layout from "../components/layout/Layout";
import GlobalContext from "../utils/GlobalContext";

export default function Board() {
 const context = useContext(GlobalContext)
  const [groupsByCode, setgroupsByCode] = useState({})

  return (
    <Layout>
      <div id="board" className="bg-cover bg-no-repeat bg-center text-white">
      <BreadCrumb/>
      <h2 className="text-left pb-6 px-32 text-3xl font-bold">
            Grupos de deportistas
            </h2>
    
      <div  className="px-32 pt-10">
        {/* <HeaderBoard amount={keysCode.length} /> */}
        <SelectFliter setgroupsByCode={setgroupsByCode} />
        <CardsBoard  groupsByCode={groupsByCode} keysCode={context.keysOfGroups} />
      </div>
      </div>
    </Layout>
  );
}
