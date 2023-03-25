import { finalArrayPyramid } from "./finalArrayPyramid";

export const firstRound = (pyramid, group) => {
  const participantes = [];
  if (group === undefined) {
    for (let index = 0; index < pyramid; index++) {
      participantes.push({
        id: index,
        teams: [{ name: "" }, { name: "" }],
      });
    }
  } else {
    const raffledPartipants = finalArrayPyramid(pyramid, group);
    console.log(raffledPartipants);
    for (let i = 0; i < raffledPartipants.length; i++) {
      participantes.push({
        id: i,
        teams: [
          {
            id: raffledPartipants[i][0]["CodDep"],
            delegation: raffledPartipants[i][0]["Delegación"],
            name: `
              
            ${raffledPartipants[i][0]["Nombre Deportista"].slice(0, 23)}.`,
          },
          {
            id: raffledPartipants[i][1]["CodDep"],
            delegation: raffledPartipants[i][1]["Delegación"],
            name: `${raffledPartipants[i][1]["Nombre Deportista"].slice(0, 23)}.`,
          },
        ],
      });
    }
  }

  return participantes;
};

export const secondRound = (pyramid) => {
  const participantes = [];
  for (let index = 0; index < pyramid / 4; index++) {
    participantes.push({
      id: index,
      teams: [{ name: "" }, { name: "" }],
    });
  }
  return participantes;
};

export const thirdRound = (pyramid) => {
  const participantes = [];
  for (let index = 0; index < pyramid / 8; index++) {
    participantes.push({
      id: index,
      teams: [{ name: "" }, { name: "" }],
    });
  }
  return participantes;
};

export const fourthRound = (pyramid) => {
  const participantes = [];
  for (let index = 0; index < pyramid / 16; index++) {
    participantes.push({
      id: index,
      teams: [{ name: "" }, { name: "" }],
    });
  }
  return participantes;
};

export const fifthRound = (pyramid) => {
  const participantes = [];
  for (let index = 0; index < pyramid / 32; index++) {
    participantes.push({
      id: index,
      teams: [{ name: "" }, { name: "" }],
    });
  }
  return participantes;
};

export const sixthRound = (pyramid) => {
  const participantes = [];
  for (let index = 0; index < pyramid / 64; index++) {
    participantes.push({
      id: index,
      teams: [{ name: "" }, { name: "" }],
    });
  }
  return participantes;
};
