import React, { useContext } from "react";
import { Bracket, Seed, SeedItem   } from "react-brackets";
import * as Generator from "../../utils/GeneratorsParticipants";
import { getLocalStorage } from "../../utils/getLocalStorage";
import GlobalContext from "../../utils/GlobalContext";
import { ItemSeed } from "./ItemSeed";

const CustomSeed = ({ seed, roundIndex, seedIndex }) => {
  const Wrapper = Seed;
  console.log(seed);
  return (
    <Wrapper
      className={`text-md font-semibold ${roundIndex > 0 ? "rounded-sm" : ""}`}
      style={{ minWidth: "0" }}
    >
      {/* caja padre */}
      {roundIndex > 0 ? (
        //Segunda ronda stylos
        <SeedItem
          className="flex gap-2 shadow-none bg-white "
          style={{
            boxShadow: "none",
            backgroundColor: "white",
            minWidth: 0,
          }}
        >
          {/* box id */}
          <div className="rounded-md w-12 bg-white text-gray-700">
            ID
            <div className="mb-1 rounded-md border-2 border-gray-400/50 bg-gray-200 h-12"></div>
            <div className="flex w-12 h-12 justify-center items-center  rounded-md border-2 border-gray-400/50 bg-gray-200"></div>
          </div>
          {/* box puntos */}
          <div className=" flex flex-col bg-white text-gray-700 rounded-md border-gray-400/50">
            PTS
            <div className="mb-1 flex justify-center items-center  border-2 border-gray-400/50 h-12 w-12 rounded-md"></div>
            <div className=" flex justify-center items-center border-2 border-gray-400/50  h-12 w-12 rounded-md"></div>
          </div>
        </SeedItem>
      ) : (
        <SeedItem
        className=" flex justify-between w-full shadow-none bg-white "
        style={{
          boxShadow: "none",
          backgroundColor: "white",
          minWidth: "0px",
        }}
      >
        {/* box id */}
  
        <div className=" text-gray-700   rounded-md w-12 flex flex-col justify-around bg-white ">
          <div>ID</div>
          <div className=" mb-1 flex justify-center items-center rounded-md border-2 border-gray-400/50 bg-gray-200  h-full w-full text-xs">
            {seed.teams[0].id || " "}
          </div>
          <div className="  flex w-12 justify-center items-center h-full rounded-md border-2 border-gray-400/50 bg-gray-200 text-xs">
            {seed.teams[1].id || " "}
          </div>
        </div>
        {/* box names */}
  
        <div
          className=" text-gray-700  flex flex-col mr-2"
          style={{ minWidth: "170px" }}
        >
          <div className="text-white">Deportistas</div>
          <div className="  mb-1 border-2  border-gray-400/50  rounded-md">
            <div className=" text-left flex items-center px-2 text-xs  h-6 border-b border-gray-400/50  w-full">
              {seed.teams[0]?.name || ""}
              {/* {efectName0} */}
            </div>
            <div className="text-left flex items-center px-2 text-xs  h-6   w-full rounded-md">
              {seed.teams[0]?.delegation || ""}
              {/* {efectDelegation0} */}
            </div>
          </div>
          <div className="   border-2 border-gray-400/50  rounded-md">
            <div className=" text-left flex items-center px-2 text-xs   h-6 border-b border-gray-400/50 bg-white  w-full ">
              {seed.teams[1]?.name || " "}
              {/* {efectName1} */}
            </div>
            <div className="text-left flex items-center px-2 text-xs  h-6    w-full ">
              {seed.teams[1]?.delegation || ""}
              {/* {efectDelegation1} */}
            </div>
          </div>
        </div>
  
        {/* box puntos */}
  
        <div className=" text-gray-700   w-12 flex flex-col justify-around bg-white   rounded-md border-gray-400/50">
          <div>PTS</div>
          <div className="mb-1 flex justify-center items-center  border-2 border-gray-400/50 h-full w-full rounded-md"></div>
          <div className=" flex justify-center items-center border-2 border-gray-400/50  h-full w-full rounded-md"></div>
        </div>
      </SeedItem>
      )}
    </Wrapper>
  );
};

export default function Pyramid() {
  const context = useContext(GlobalContext);
  const typePyramid = getLocalStorage("typePyramid");
  const groupLocal = getLocalStorage("groupNow");
  const groupsByCode = getLocalStorage("groupsByCode");
  const keyNameNow = getLocalStorage("keyNameNow");
  const grouptem = groupsByCode[keyNameNow];

  const group =
    grouptem.arrayGroup || context.groupNow.arrayGroup || groupLocal.arrayGroup;

  const pyramidValues = {
    2: 2,
    3: 6,
    4: 4,
    8: 8,
    16: 16,
    32: 32,
  };
  const pyramid = pyramidValues[typePyramid] || null;

  const rounds = [
    {
      key: "round1",
      seeds: Generator.firstRound(pyramid, group),
    },
  ];
  pyramid === 4 &&
    rounds.push({
      key: "round2",
      seeds: Generator.secondRound(pyramid),
    });
  pyramid === 6 &&
    rounds.push({
      key: "round2",
      seeds: Generator.secondRound(pyramid),
    });
  pyramid === 8 &&
    rounds.push(
      {
        key: "round2",
        seeds: Generator.secondRound(pyramid),
      },
      {
        key: "round3",
        seeds: Generator.thirdRound(pyramid),
      }
    );
  pyramid === 16 &&
    rounds.push(
      {
        key: "round2",
        seeds: Generator.secondRound(pyramid),
      },
      {
        key: "round3",
        seeds: Generator.thirdRound(pyramid),
      },
      {
        key: "round4",
        seeds: Generator.fourthRound(pyramid),
      }
    );
  pyramid === 32 &&
    rounds.push(
      {
        key: "round2",
        seeds: Generator.secondRound(pyramid),
      },
      {
        key: "round3",
        seeds: Generator.thirdRound(pyramid),
      },
      {
        key: "round4",
        seeds: Generator.fourthRound(pyramid),
      },
      {
        key: "round5",
        seeds: Generator.fifthRound(pyramid),
      }
    );

  return <Bracket rounds={rounds} renderSeedComponent={CustomSeed} />;
}
