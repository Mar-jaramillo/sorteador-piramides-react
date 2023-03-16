/**

Retorna un objeto con las propiedades únicas de los objetos de un array de datos
@param {Array} excelData - Array de objetos con datos a procesar
@returns {Object} - Objeto con las propiedades únicas y sus valores del array de datos
**/

export const obtenerPropiedadesUnicas = (excelData) => {
  let propiedades = {};
  excelData.forEach((obj) => {
    for (let key in obj) {
      if (
        key !== "CodDep" &&
        key !== "Nombre Deportista" &&
        key !== "Doc. Identificación"
      ) {
        let value = obj[key];
        if (Array.isArray(propiedades[key])) {
          if (!propiedades[key].includes(value)) {
            propiedades[key].push(value);
          }
        } else {
          propiedades[key] = [value];
        }
      }
    }
  });
  return propiedades;
};
