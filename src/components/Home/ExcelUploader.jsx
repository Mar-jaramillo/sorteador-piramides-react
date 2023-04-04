import React, { useContext, useState } from "react";
import GlobalContext from "../../utils/GlobalContext";
import { useNavigate } from "react-router-dom";

import { processExcelFile } from "../../utils/excelUploader/processExcelFile";
import { validateFile } from "../../utils/excelUploader/validateFile";
import { obtenerPropiedadesUnicas } from "../../utils/obtenerPropiedadesUnicas";
import { createGroupsByCode } from "../../utils/createGroupsByCode";
import FormUploader from "./FormUploader";
import { getLocalStorage } from "../../utils/getLocalStorage";

export default function ExcelUploader({ setError }) {
  const [nameEvent, setNameEvent] = useState(getLocalStorage("nameEvent"));
  const [excelFile, setExcelFile] = useState(null);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const context = useContext(GlobalContext);

  const handleSubmit = (e) => {
    setloading(true);
    //Este funcion va tratar todo los datos de la aplicacion
    e.preventDefault();
    try {
      if (excelFile !== null) {
        //Operaciones
        const excelData = processExcelFile(excelFile);
        const valuesUniques = obtenerPropiedadesUnicas(excelData); // crea las propiedades unicas para usar en los selects de board
        const groupsByCode = createGroupsByCode(excelData); // crea los grupos de deportistas por codigo
        const keysOfGroups = Object.keys(groupsByCode);
        
        let countKeysUndifined = 0
            //0     //1    //2
        //["key1", "key2", "key3"]

        for (let i = 0; i < keysOfGroups.length; i++) {
            if (keysOfGroups[i] === "undefined") {
              countKeysUndifined++
            }
        }

        const keysNoMutar = keysOfGroups;
        // crea un array de lo codigos para usar en el board
        const totalGroups = keysOfGroups.length;
        const totalDelegations = valuesUniques["Delegación"].length;

        //Guardados en contexto
        context.nameEvent = nameEvent;
        context.totalGroups = totalGroups;
        context.totalDelegations = totalDelegations;
        context.groupsByCode = groupsByCode;
        context.keysOfGroups = keysOfGroups;
        context.keysNoMutar = keysOfGroups.slice();
        context.valuesUniques = valuesUniques;
        context.totalGroupsUndefined = countKeysUndifined

        //Guardados en LocalStorage
        localStorage.setItem("totalGroupsUndefined", JSON.stringify(countKeysUndifined));
        localStorage.setItem("nameEvent", JSON.stringify(nameEvent));
        localStorage.setItem("totalGroups", JSON.stringify(totalGroups));
        localStorage.setItem(
          "totalDelegations",
          JSON.stringify(totalDelegations)
        );
        localStorage.setItem("groupsByCode", JSON.stringify(groupsByCode));
        localStorage.setItem("keysOfGroups", JSON.stringify(keysOfGroups));
        localStorage.setItem("keysNoMutar", JSON.stringify(keysNoMutar));
        localStorage.setItem("valuesUniques", JSON.stringify(valuesUniques));
        localStorage.setItem("excelData", JSON.stringify(excelData));
        // const eventData = {
        //   nameEvent: nameEvent,
        //   data: data,
        // };
        // saveEventData(eventData); hacer funcionar para guardar el eventData en archivo JSON con electron

        setloading(false)
        setError(false);
        navigate("/data");
      }
    } catch (error) {
      console.log(error);
      context.nameEvent = nameEvent;
      localStorage.setItem("nameEvent", JSON.stringify(nameEvent));
      error && setError(true);
      setloading(false)
    }
    

  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (validateFile(file)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        };
      } else {
        setError(true);
      }
    } else {
      console.log("plz select your file");
    }
  };

  return (
    <div className="mt-20   2xl:mt-52 flex items-center flex-col">
      <FormUploader
        loading={loading}
        handleSubmit={handleSubmit}
        setNameEvent={setNameEvent}
        handleFileUpload={handleFileUpload}
      />
    </div>
  );
}
