export const firstRound = (pyramid, Group) => {
  const copyGroup = Group.slice(); // Creo una copia
  const raffleGroup = copyGroup.sort(() => Math.random() - 0.5); // lo rifo
  const participantesPairs = new Array(pyramid); //creo arrray vacio con las posiciones
  // Iterar sobre los objetos y emparejarlos creo
  for (let i = 0; i < participantesPairs.length; i += 2) {
    const obj1 = raffleGroup[i];
    const obj2 = raffleGroup[i + 1] || "Bay"; // Si el array tiene un número impar de objetos, el último objeto se empareja con null
    // Si las delegaciones son iguales, mover el segundo objeto a la siguiente posición y emparejarlo con el siguiente objeto
    if (obj1["Delegación"] === obj2["Delegación"]) {
      raffleGroup.splice(i + 1, 1);
      raffleGroup.splice(i + 1, 0, obj2);
      participantesPairs.push([obj1, raffleGroup[i + 2] || null]); // Emparejar el primer objeto con el siguiente objeto en la nueva posición
    } else {
      participantesPairs.push([obj1, obj2]); // Emparejar los objetos
    }
  }
  const renderizadoParticipants = [];
  for (let i = 0; i < copyGroup.length; i++) {
    renderizadoParticipants.push({
      id: i,
      teams: [
        { name: `${participantesPairs[i][0]["Nombre Deportista"]}` },
        { name: `${participantesPairs[i][0]["Delegación"]}` },
      ],
    });
  }
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
