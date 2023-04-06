export const clearData = () => {
  var elementosAEliminar = [
    "groupsByCode",
    "groupNow ",
    "nameEvent",
    "totalGroups",
    "keysOfGroups",
    "totalGroupsNotRaffled",
    "amountParticipantsCard ",
    "typePyramid",
    "valuesUniques",
    "keysNoMutar",
    "totalDelegations",
    "excelData",
    "totalGroupsUndefined",
    "keyNameNow",
  ];

  for (let i = 0; i < elementosAEliminar.length; i++) {
    localStorage.removeItem(elementosAEliminar[i]);
  }
};
