import React, { useState } from "react";
import CardsBoard from "../components/board/CardsBoard";

import HeaderBoard from "../components/board/HeaderBoard";

import SelectFliter from "../components/board/SelectFilter";
import BreadCrumb from "../components/layout/BreadCrumb";

import Layout from "../components/layout/Layout";

export default function Board() {
  const [keysCode, setKeysCode] = useState([]);
  const [groupsByCode, setgroupsByCode] = useState({});
  const [numPyramid, setNumPyramid] = useState(3);

  return (
    <>
      <Layout>
        <div id="board" className="px-32 pt-10 text-white">
          <BreadCrumb />
          <HeaderBoard amount={keysCode.length} />
          <SelectFliter
            setKeysCode={setKeysCode}
            setgroupsByCode={setgroupsByCode}
          />
          <CardsBoard
             
            groupsByCode={groupsByCode}
            keysCode={keysCode}
          />
        </div>
      </Layout>
    </>
  );
}
