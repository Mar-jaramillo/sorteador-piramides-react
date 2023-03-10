import React from "react";
import BracketDual from "../BracketDual";
import CombatWinners from "../CombatWinners";
import Winner from "../Winner";

export default function PyramidFour() {
  const nums = [1, 2];
  return (
    <>
      <div className="grid grid-cols-12 text-xs">
        <div className="col-span-7">
          {nums.map((num, index) => (
            <BracketDual key={index} />
          ))}
        </div>
        <CombatWinners />
        <div className="col-span-3 flex items-center">
          <div className="border-l border-gray-500 h-32  flex items-center"><Winner/></div>
        </div>
      </div>
    </>
  );
}
