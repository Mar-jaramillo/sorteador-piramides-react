export const firstRound = (pyramid, participants) => {
  const participantes = [];
  for (let index = 1; index < pyramid; index++) {
    participantes.push({
      id: index,
      teams: [{ name: `${index} ` }, { name: participants }],
    });
  }
  return participantes;
};

export const secondRound = (pyramid) => {
  const participantes = [];
  for (let index = 0; index < pyramid / 2; index++) {
    participantes.push({
      id: index,
      teams: [{ name: "Pts" }, { name: "Pts" }],
    });
  }
  return participantes;
};

export const thirdRound = (pyramid) => {
  const participantes = [];
  for (let index = 0; index < pyramid / 4; index++) {
    participantes.push({
      id: index,
      teams: [{ name: "Pts" }, { name: "Pts" }],
    });
  }
  return participantes;
};

export const fourthRound = (pyramid) => {
  const participantes = [];
  for (let index = 0; index < pyramid / 8; index++) {
    participantes.push({
      id: index,
      teams: [{ name: "Pts" }, { name: "Pts" }],
    });
  }
  return participantes;
};

export const fifthRound = (pyramid) => {
  const participantes = [];
  for (let index = 0; index < pyramid / 16; index++) {
    participantes.push({
      id: index,
      teams: [{ name: "Pts" }, { name: "Pts" }],
    });
  }
  return participantes;
};
