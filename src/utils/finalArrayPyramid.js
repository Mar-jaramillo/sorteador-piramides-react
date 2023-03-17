import { createArrayAndObjects } from "./createArrayAndObjects";
import { raffledGroup } from "./raffledGroup";
  // resultado * 2 me dira cuantas participantes de la misma delegacion se van a enfrentar 
  // sacar los que van a pelear
  // sortear como lo hicimos
  // unirlos 
  

export function finalArrayPyramid(pyramid, group) {


  let finalPyramid = createArrayAndObjects(pyramid); //crear la piramide con x posiciones y objetos comunes

  for (let i = 0; i < group.length; i++) { //  rellenar esta piramide con los deportistas
    finalPyramid[i] = group[i];
  }
  //hacer funcion que determine cuantas delegaciones tiene finalPyramid 
  //determinar cual es la delegacion con mas participantes
  //if la mayor delegacion es mayor a la mitad de cantidad de la piramide se resta 
  //se resultado  llene los espacios y entre lo

  finalPyramid = raffledGroup(finalPyramid); // luego lo va rifar

  let i = 0;

  const pares = [];
  console.log(finalPyramid);
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
  console.log("por aqui paso 2");
  console.log(pares);
  return pares;
}
