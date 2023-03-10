import React from "react";
import BracketDual from "../BracketDual";
import CombatWinners from "../CombatWinners";

export default function PyramidThree() {
  const nums = [1, 2, 3];
  return (
    <>
      <div className="grid grid-cols-12 text-xs ">
        <div className="col-span-8">
          {nums.map((num, index) => (
            <BracketDual key={index} />
          ))}
        </div>
        <CombatWinners pyramid={3}/>
      </div>
    </>
  );
}
