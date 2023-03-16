/**
 * Crea grupos de objetos a partir de un array de objetos, agrupándolos por su propiedad "CBTE IND".
 *
 * @param {Array} dataFromLocalStorage - El array de objetos a agrupar.
 *
 * @returns {Object} - Un objeto cuyas claves son los valores únicos de la propiedad "CBTE IND" en el array original, y cuyos valores son arrays de objetos que tienen ese mismo valor de "CBTE IND".
 */

export const createGroupsByCode = (dataFromLocalStorage) => {
  const datosPorCodigo = {};
  dataFromLocalStorage.forEach((deportista) => {
    const codigo = deportista["CBTE IND"];
    if (!datosPorCodigo[codigo]) {
      datosPorCodigo[codigo] = [];
    }
    datosPorCodigo[codigo].push(deportista);
  });
  return datosPorCodigo;
};
