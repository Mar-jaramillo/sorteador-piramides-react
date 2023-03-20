import { createArrayAndObjects } from "./createArrayAndObjects";
import { raffledGroup } from "./raffledGroup";

export function finalArrayPyramid(pyramid, group) {
  let finalPyramid = createArrayAndObjects(pyramid);

  finalPyramid = finalPyramid.filter(
    (participant) => !group.includes(participant)
  );
  finalPyramid.splice(0, group.length, ...group);

  const delegations = {}; //hace un objeto  con key de delgacion y los values un number
  for (let i = 0; i < finalPyramid.length; i++) {
    const delegation = finalPyramid[i]["Delegación"];
    if (!delegations[delegation]) {
      delegations[delegation] = 0;
    }
    delegations[delegation]++;
  }
  const maxDelegation = Object.keys(delegations).reduce(
    (a, b) => (delegations[a] > delegations[b] ? a : b),
    []
  ); //dice quien es el mayor =>

  const delagationMayor = delegations[maxDelegation];

  if (delagationMayor > finalPyramid.length / 2) {
    const eliminados = finalPyramid.filter((participant) => participant["Delegación"] === maxDelegation );

  }
  finalPyramid.filter((participant) => participant["Delegación"] !== maxDelegation );

let died =0
  const pares = [];
  let i = 0;
  while (i + 1 < finalPyramid.length) {
    died++;
    if (died > 500) {
      debugger;
      console.log(delagationMayor);
    
      died=0
      break;
    }
    const participante1 = finalPyramid[i];
    const participante2 = finalPyramid[i + 1];
    i += 2;

    if (
      !participante2 ||
      participante1["Nombre Deportista"] ===
        participante2["Nombre Deportista"] ||
      participante2["Delegación"] === participante1["Delegación"]
    ) {
      raffledGroup(finalPyramid);
      i = 0;
      pares.length = 0;
      continue;
    }

    pares.push([participante1, participante2]);
  }

  return pares;
}
