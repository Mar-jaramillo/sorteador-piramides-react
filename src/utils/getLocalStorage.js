export const getLocalStorage = (nameKeyString) =>
  JSON.parse(localStorage.getItem(nameKeyString));
