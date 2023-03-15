/**
 * Ordena aleatoriamente los elementos en un array utilizando el algoritmo Fisher-Yates.
 * 
 * @returns {Array} - Un nuevo array con los elementos del array original ordenados aleatoriamente.
 */

export const raffledGroup = group => group.sort(() => Math.random() - 0.5);