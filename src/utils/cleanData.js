export const cleanData = () => {
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
    "amountfilteredKeys",
    "listParamsSearch",
    "isLogin"

  ];
  for (let i = 0; i < elementosAEliminar.length; i++) {
    localStorage.removeItem(elementosAEliminar[i]);
  }
};
