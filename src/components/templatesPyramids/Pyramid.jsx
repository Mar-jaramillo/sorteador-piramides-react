import React, { useContext, useEffect } from "react";
import { Bracket, Seed, SeedItem, SingleLineSeed } from "react-brackets";
import * as Generator from "../../utils/GeneratorsParticipants";
import { getLocalStorage } from "../../utils/getLocalStorage";
import GlobalContext from "../../utils/GlobalContext";
import { ItemSeed } from "./ItemSeed";

const CustomSeed = ({ seed, roundIndex, seedIndex }) => {
  const context = useContext(GlobalContext);


  const typePyramid = context.typePyramid || getLocalStorage("typePyramid");

  useEffect(() => {
    const wrapper = document.querySelectorAll(".wrapper");
    if (typePyramid !== 3) {
      wrapper.forEach((ele) => ele.classList.remove("item"));
      console.log("se cumplio la condicion");
    }
  }, [typePyramid]);

  const Wrapper = Seed;
  return (
    <Wrapper
      className={`wrapper item text-md font-semibold ${
        roundIndex > 0 ? "rounded-sm" : ""
      }`}
      style={{ minWidth: "0" }}
    >
      {/* caja padre */}
      {roundIndex > 0 ? (
        //Segunda ronda stylos
        <SeedItem
          className="wrapper item flex gap-2 shadow-none bg-white "
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
        <ItemSeed seed={seed} />
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
      seeds: Generator.forPyramidThree(),
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
