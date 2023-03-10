import React from "react";
import BracketDual from "../BracketDual";
import CombatWinners from "../CombatWinners";
import Winner from "../Winner";
import PyramidFour from "./PyramidFour";

export default function PyramidEigth() {
  const nums = [1, 2];
  return (
    <>
      <div className="grid grid-cols-12 text-xs">
        <div className="col-span-9  ">
          {nums.map((num, index) => (
            <PyramidFour key={index}/>
          ))}
        </div>
        <div className="col-span-3 flex items-center">
          <div className="border-l border-gray-500 h-72  flex items-center"><Winner/></div>
        </div>
      </div>
     

    </>
  );
}
