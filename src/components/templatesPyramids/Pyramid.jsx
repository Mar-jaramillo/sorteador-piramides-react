import React, { useContext } from "react";
import { Bracket, Seed, SeedItem, SeedTeam } from "react-brackets";
import * as Generator from "../../utils/GeneratorsParticipants";
import GlobalContext from "../../utils/GlobalContext";

const CustomSeed = ({ seed, breakpoint, roundIndex, seedIndex, rounds }) => {
  const isLineConnector = rounds;

  const Wrapper = Seed;

  // mobileBreakpoint is required to be passed down to a seed
  return (
    <Wrapper mobileBreakpoint={breakpoint} className="text-md ">
      {/* caja padre */}
      <SeedItem
        className="flex justify-between w-full  shadow-none bg-white m-2 border border-gray-700 rounded-none"
        style={{
          boxShadow: "none",
          backgroundColor: "white",
          minWidth: "260px",
          width:"260px"
        }}
      >
        <div className="rounded-none w-full border-r border-gray-700">
          <SeedTeam className="text-left  max-h-8  h-8  border-b border-gray-700 text-gray-700 w-full rounded-none">
            {seed.teams[0]?.name || ""}
          </SeedTeam>
          <SeedTeam className="text-left max-h-8  h-8 bg-white text-gray-700 w-full rounded-none">
            {seed.teams[1]?.name || " "}
          </SeedTeam>
        </div>
        <div className="border w-10 flex flex-col justify-around bg-white text-gray-700">
          <div className="border-b border-gray-700 h-full w-full"></div>
          <div className="h-full w-full"></div>
        </div>
      </SeedItem>
    </Wrapper>
  );
};

export default function Pyramid() {
  const context = useContext(GlobalContext);
  const typePyramid = context.typePyramid;

  let pyramid;
  switch (typePyramid) {
    case 2:
      pyramid = 4;
      break;
    case 3:
      pyramid = 6;
      break;
    case 4:
      pyramid = 4;
      break;
    case 8:
      pyramid = 8;
      break;
    case 16:
      pyramid = 16;
      break;
    case 32:
      pyramid = 32;
      break;
    default:
  }
  console.log(pyramid);
  const rounds = [
    {
      key: "round1",
      seeds: Generator.firstRound(pyramid, context.groupNow),
    },
  ];
  pyramid == 2 &&
    rounds.push({
      key: "round2",
      seeds: Generator.secondRound(pyramid),
    });

  pyramid === 4 &&
    rounds.push(
      {
        key: "round2",
        seeds: Generator.secondRound(pyramid),
      },
 
    );
    pyramid === 6 &&
    rounds.push(
      {
        key: "round2",
        seeds: Generator.secondRound(pyramid),
      },
      {
        key: "round3",
        seeds: Generator.thirdRound(pyramid),
      },
    );
  pyramid === 8 &&
    rounds.push(
      {
        key: "round2",
        seeds: Generator.secondRound(pyramid),
      },
      {
        key: "round3",
        seeds: Generator.thirdRound(pyramid),
      },
 
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
