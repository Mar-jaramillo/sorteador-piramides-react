import React, { useContext, useEffect, useState } from "react";
import { Bracket, Seed, SeedItem, SeedTeam } from "react-brackets";
import * as Generator from "../../utils/GeneratorsParticipants";
import { getLocalStorage } from "../../utils/getLocalStorage";
import GlobalContext from "../../utils/GlobalContext";

const CustomSeed = ({ seed, breakpoint, roundIndex }) => {
  const Wrapper = Seed;

  return (
    <Wrapper
      mobileBreakpoint={breakpoint}
      className={`text-md font-semibold ${roundIndex > 0 ? "rounded-sm" : ""}`}
    >
      {/* caja padre */}
      {roundIndex > 0 ? (
        //Segunda ronda stylos
        <SeedItem
          className="flex justify-between shadow-none bg-white "
          style={{
            boxShadow: "none",
            backgroundColor: "white",
          }}
        >
          {/* box id */}
          <div className="rounded-md w-12 bg-white text-gray-700">
            {" "}
            ID
            <div className="mb-1 rounded-md border-2 border-gray-400/50 bg-gray-200 h-12"></div>
            <div className="flex w-12 h-12 justify-center items-center  rounded-md border-2 border-gray-400/50 bg-gray-200 text-xs"></div>
          </div>
          {/* box puntos */}
          <div className="w-12 flex flex-col justify-around bg-white text-gray-700 border-r-2 rounded-md border-gray-400/50">
            {" "}
            PTS
            <div className="mb-1 flex justify-center items-center  border-2 border-gray-400/50 h-12 w-12 text-xs rounded-md"></div>
            <div className=" flex justify-center items-center border-2 border-gray-400/50  h-12 w-12 text-xs rounded-md"></div>
          </div>
        </SeedItem>
      ) : (
        <SeedItem
          className="flex justify-between w-full shadow-none bg-white "
          style={{
            boxShadow: "none",
            backgroundColor: "white",
          }}
        >
          {/* box id */}

          <div className=" rounded-md w-12 flex flex-col justify-around bg-white text-gray-700">
            <div className="animate1 mb-1 flex justify-center items-center rounded-md border-2 border-gray-400/50 bg-gray-200  h-full w-full text-xs">
              {seed.teams[0].id || " "}
            </div>
            <div className="animate2 flex w-12 justify-center items-center h-full rounded-md border-2 border-gray-400/50 bg-gray-200 text-xs">
              {seed.teams[1].id || " "}
            </div>
          </div>
          {/* box names */}

          <div className=" flex flex-col mr-2" style={{ minWidth: "170px" }}>
            <div className="animate1  mb-1 border-2  border-gray-400/50  rounded-md">
              <div className=" text-left flex items-center px-2 text-xs  h-6 border-b border-gray-400/50 text-gray-700 w-full">
                {seed.teams[0]?.name || ""}
                {/* {efectName0} */}
              </div>
              <div className="text-left flex items-center px-2 text-xs  h-6  text-gray-700 w-full rounded-md">
                {seed.teams[0]?.delegation || ""}
                {/* {efectDelegation0} */}
              </div>
            </div>
            <div className="animate2  border-2 border-gray-400/50  rounded-md">
              <div className=" text-left flex items-center px-2 text-xs   h-6 border-b border-gray-400/50 bg-white text-gray-700 w-full ">
                {seed.teams[1]?.name || " "}
                {/* {efectName1} */}
              </div>
              <div className="text-left flex items-center px-2 text-xs  h-6   text-gray-700 w-full ">
                {seed.teams[1]?.delegation || ""}
                {/* {efectDelegation1} */}
              </div>
            </div>
          </div>

          {/* box puntos */}
          <div className="  w-12 flex flex-col justify-around bg-white text-gray-700 border-r-2 rounded-md border-gray-400/50">
            <div className="mb-1 flex justify-center items-center  border-2 border-gray-400/50 h-full w-full text-xs rounded-md"></div>
            <div className=" flex justify-center items-center border-2 border-gray-400/50  h-full w-full text-xs rounded-md"></div>
          </div>
        </SeedItem>
      )}
    </Wrapper>
  );
};

export default function Pyramid() {
  const context = useContext(GlobalContext);
  const typePyramid = getLocalStorage("typePyramid")
  const groupLocal = getLocalStorage("groupNow");
  const groupsByCode = getLocalStorage("groupsByCode");
  const keyNameNow = getLocalStorage("keyNameNow");
  const grouptem = groupsByCode[keyNameNow];

  const group = grouptem.arrayGroup || context.groupNow.arrayGroup || groupLocal.arrayGroup;

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
