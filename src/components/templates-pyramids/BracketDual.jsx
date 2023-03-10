import React from "react";
import BracketIndividual from "./BracketIndividual";

export default function BracketDual() {
  return (
    <div className="border-r border-gray-500">
      <BracketIndividual />
      <BracketIndividual />
    </div>
  );
}
