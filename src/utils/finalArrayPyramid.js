import { createArrayAndObjects } from "./createArrayAndObjects";
import { raffledGroup } from "./raffledGroup";

//Retorna un array de objetos duplicados solo si su longitud es de 3
const pyramidTree = (group) => group.concat(group)


export function finalArrayPyramid(pyramid, arrayGroup) {
  let group = [...arrayGroup] 
  console.log(group);
  let finalPyramid = createArrayAndObjects(pyramid); //Se espera que cree un array con x posiciones

  if (group.length === 3) {
    group = pyramidTree(group)
  }

  finalPyramid = finalPyramid.filter( // las ubica en orden en la piramide
    (participant) => !group.includes(participant)
  );

  // remplaza los datos de la piramide por los nuevos datos de la piramide en caso de que la piramide no este vacia
  finalPyramid.splice(0, group.length, ...group); 

  const delegations = {}; //Se espera las delegaciones como key y las veces que se repite como number
  for (let i = 0; i < finalPyramid.length; i++) { //Crea el objeto delegations para saber cuantos hay por cada delegacion
    const delegation = finalPyramid[i]["Delegación"];
    if (!delegations[delegation]) {
      delegations[delegation] = 0;
    }
    delegations[delegation]++;
  }
  const maxDelegation = Object.keys(delegations).reduce( //Se espera que retorne un string con la delegacion que mas se repite
    (a, b) => (delegations[a] > delegations[b] ? a : b),
    []
  ); 

  const delagationMayor = delegations[maxDelegation]; //retorna el valor de la propiedad del obj delegations 

  if (delagationMayor > finalPyramid.length / 2) { // Divide el valor de la propiedad delegationMayor y lo divide con la longitud del grupo finalPyramid
    const eliminados = finalPyramid.filter(
      (participant) => participant["Delegación"] === maxDelegation
    );
  }
  finalPyramid.filter( // filtra los que no son mayores
    (participant) => participant["Delegación"] !== maxDelegation
  );

  const pares = [];
  let i = 0;

  //Crea un array de parejas en array, teniendo encuenta que no se repita las delegaciones
  while (i + 1 < finalPyramid.length) {
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

