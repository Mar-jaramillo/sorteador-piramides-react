/**
 * Crea un nuevo array de objetos con valores predeterminados para las propiedades "Nombre Deportista" y "Delegación".
 * 
 * @param {number} pyramid - El número de objetos que se deben crear en el array.
 * @returns {Array} - Un nuevo array de objetos con la cantidad especificada de elementos.
 */

export const createArrayAndObjects = (pyramid) => {
  return new Array(pyramid).fill({
 
    "Nombre Deportista": "Bye",
    Delegación: "",
  });
};
