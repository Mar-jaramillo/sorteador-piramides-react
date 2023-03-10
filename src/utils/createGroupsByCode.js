export const createGroupsByCode=(dataFromLocalStorage)=>{
    const datosPorCodigo = {};
    dataFromLocalStorage.forEach((deportista) => {
      const codigo = deportista["CBTE IND"];
      if (!datosPorCodigo[codigo]) {
        datosPorCodigo[codigo] = [];
      }
      datosPorCodigo[codigo].push(deportista);
    });
    return datosPorCodigo
}