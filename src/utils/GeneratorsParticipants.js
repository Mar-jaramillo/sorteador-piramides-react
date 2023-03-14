export const firstRound = (pyramid, Group) => {
  const copyGroup = Group.slice(); // Creo una copia
  const raffleGroup = copyGroup.sort(() => Math.random() - 0.5); // lo rifo
  const participantesPairs = new Array(pyramid).fill({}); //creo arrray vacio con las posiciones

  let indexWhile = 0;
  while (indexWhile < participantesPairs.length) {
    const obj1 = raffleGroup[indexWhile]; //0,2
    const obj2 = raffleGroup[indexWhile + 1]; //1,3
    if (obj1["Delegación"] !== obj2["Delegación"]) {
      participantesPairs[indexWhile] = obj1
      participantesPairs[indexWhile + 1] = obj2
      console.log(participantesPairs[indexWhile]);j
      console.log(participantesPairs[indexWhile+1]);
    }
    indexWhile += 2;
  }

console.log(participantesPairs);
  const renderizadoParticipants = [];
  // for (let i = 0; i < copyGroup.length; i++) {
  //   renderizadoParticipants.push({
  //     id: i,
  //     teams: [
  //       { name: `${participantesPairs[i]["Nombre Deportista"]}` },
  //       { name: `${participantesPairs[i]["Delegación"]}` },
  //     ],
  //   });
  // }
  return renderizadoParticipants;
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

export const sixthRound = (pyramid) => {
  const participantes = [];
  for (let index = 0; index < pyramid / 32; index++) {
    participantes.push({
      id: index,
      teams: [{ name: "Pts" }, { name: "Pts" }],
    });
  }
  return participantes;
};
