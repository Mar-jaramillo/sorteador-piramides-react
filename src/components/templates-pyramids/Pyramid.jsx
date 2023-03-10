import React from "react";
import { Bracket } from "react-brackets";
import * as Generator from "../../utils/GeneratorsParticipants";
import { getLocalStorage } from "../../utils/getLocalStorage";

export default function Pyramid({ typePyramid}) {
  const data = getLocalStorage("groupsByCode");
  let pyramid;

  switch (typePyramid) {
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

  const rounds = [
    {
      seeds: Generator.firstRound(pyramid),
    },
  ];

  pyramid === 6 &&
    rounds.push({
      seeds: Generator.secondRound(pyramid),
    });
  pyramid === 4 &&
    rounds.push(
      {
        seeds: Generator.secondRound(pyramid),
      },
      {
        seeds: Generator.thirdRound(pyramid),
      }
    );
  pyramid === 8 &&
    rounds.push(
      {
        seeds: Generator.secondRound(pyramid),
      },
      {
        seeds: Generator.thirdRound(pyramid),
      },
      {
        seeds: Generator.fourthRound(pyramid),
      }
    );
  pyramid === 16 &&
    rounds.push(
      {
        seeds: Generator.secondRound(pyramid),
      },
      {
        seeds: Generator.thirdRound(pyramid),
      },
      {
        seeds: Generator.fourthRound(pyramid),
      },
      {
        seeds: Generator.fifthRound(pyramid),
      }
    );

  return (


      <Bracket rounds={rounds} />
   
  );
}
