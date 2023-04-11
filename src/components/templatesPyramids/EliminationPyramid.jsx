import React from "react";
import { Bracket, Seed, SeedItem, SeedTeam } from "react-brackets";
import * as Generator from "../../utils/GeneratorsParticipants";
import { getLocalStorage } from "../../utils/getLocalStorage";

const CustomSeed = ({ seed, breakpoint, roundIndex }) => {
  const Wrapper = Seed;
  const typePyramid = getLocalStorage("typePyramid");
  return (
    
    <Wrapper mobileBreakpoint={breakpoint} className={"text-md font-semibold"}style={{minWidth:"0"}}>
      
      <SeedItem
        className="flex justify-end  min-w-0 gap-2 shadow-none bg-white "
        style={{
          boxShadow: "none",
          backgroundColor: "white",
          minWidth: 0,
        }}
      >
        {/* box id */}
        
        <div className="rounded-md w-12 bg-white text-gray-700">
          ID
          <div className="mb-1 rounded-md border-2 border-gray-400 bg-gray-200 h-14"></div>
        </div>
      

        {/* box puntos */}
        <div className=" flex flex-col bg-white text-gray-700 rounded-md border-gray-400">
          PTS
          <div className="mb-1 flex justify-center items-center  border-2 border-gray-400 h-14 w-12 rounded-md"></div>
        </div>
      </SeedItem>
     
    </Wrapper>
  );
};

export default function EliminationPyramid() {
  const typePyramid = 2;
  const pyramidValues = {
    2: 2,
  };
  const eliminationPyramid = pyramidValues[typePyramid] || null;
  const rounds = [
    {
      key: "round1",
      seeds: Generator.firstRound(eliminationPyramid),
    },
  ];
  eliminationPyramid === 2 &&
    rounds.push({
      key: "round2",
      seeds: Generator.secondRound(eliminationPyramid),
    });

  return <Bracket rounds={rounds} renderSeedComponent={CustomSeed} />;
}
