import React, { useContext } from "react";
import { Bracket, Seed, SeedItem, SeedTeam } from "react-brackets";
import * as Generator from "../../utils/GeneratorsParticipants";
import GlobalContext from "../../utils/GlobalContext";

const CustomSeed = ({ seed, breakpoint, roundIndex, seedIndex, rounds }) => {
  // ------ assuming rounds is the losers brackets rounds ------
  // losers rounds usually got some identical seeds amount like (2 - 2 - 1 - 1)

  const isLineConnector = rounds;

  const Wrapper = Seed;

  // mobileBreakpoint is required to be passed down to a seed
  return (
    <Wrapper mobileBreakpoint={breakpoint} style={{ fontSize: 13 }}>
      {/* caja padre */}
      <SeedItem style={{ fontSize: 13, boxShadow: "none", margin: "2px" }}>
        <div style={{ fontSize: 13 }}>
          <SeedTeam
            style={{
              color: "black",
              border: "1px solid gray",
              backgroundColor: "white",
              width: "250px",
            }}
          >
            {seed.teams[0]?.name || "NO TEAM "}
          </SeedTeam>
          <SeedTeam
            style={{
              color: "black",
              border: "1px solid gray",
              backgroundColor: "white",
              width: "250px",
            }}
          >
            {seed.teams[1]?.name || "NO TEAM "}
          </SeedTeam>
        </div>
      </SeedItem>
    </Wrapper>
    
  );
};

export default function Pyramid({ typePyramid }) {
  const context = useContext(GlobalContext);

  let pyramid;
  switch (typePyramid) {
    case 2:
      pyramid = 2;
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

  const rounds = [
    {
      key: "round1",
      seeds: Generator.firstRound(pyramid, context.groupNow),
    },
  ];
  pyramid === 2 &&
    rounds.push(

      {
        key: "round2",
        seeds: Generator.secondRound(pyramid),
      }
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
      }
    );
  pyramid === 4 &&
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
      {
        key: "round4",
        seeds: Generator.fourthRound(pyramid),
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
      },
      {
        key: "round5",
        seeds: Generator.fifthRound(pyramid),
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
