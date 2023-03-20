import React, { useContext, useState } from "react";
import GlobalContext from "../../utils/GlobalContext";
import { useNavigate } from "react-router-dom";

// import { saveEventData } from "../../utils/excelUploader/saveEventData";
import { processExcelFile } from "../../utils/excelUploader/processExcelFile";
import { validateFile } from "../../utils/excelUploader/validateFile";
import { obtenerPropiedadesUnicas } from "../../utils/obtenerPropiedadesUnicas";
import { createGroupsByCode } from "../../utils/createGroupsByCode";
import FormUploader from "./FormUploader";

export default function ExcelUploader({ setIsLoading, setError }) {
  const [nameEvent, setNameEvent] = useState("");
  const [excelFile, setExcelFile] = useState(null);
  const navigate = useNavigate();
  const context = useContext(GlobalContext);


  const handleSubmit = (e) => {
    //Este funcion va tratar todo los datos de la aplicacion
    e.preventDefault();
    if (excelFile !== null) {
      //Operaciones
      const excelData = processExcelFile(excelFile); //Procesa el Excel
      const valuesUniques = obtenerPropiedadesUnicas(excelData); // crea las propiedades unicas para usar en los selects de board
      const groupsByCode = createGroupsByCode(excelData); // crea los grupos de deportistas por codigo
      const keysOfGroups = Object.keys(groupsByCode); // crea un array de lo codigos para usar en el board
      const totalGroups = keysOfGroups.length;
      const totalDelegations = valuesUniques["Delegación"].length;


      //Guardados en contexto
      context.nameEvent = nameEvent;
      context.totalGroups = totalGroups;
      context.totalDelegations = totalDelegations
      context.groupsByCode = groupsByCode;
      context.keysOfGroups = keysOfGroups;
      context.valuesUniques = valuesUniques;

      //Guardados en LocalStorage
      localStorage.setItem("nameEvent", JSON.stringify(nameEvent));
      localStorage.setItem("totalGroups", JSON.stringify(totalGroups));
      localStorage.setItem("totalDelegations", JSON.stringify(totalDelegations));
      localStorage.setItem("groupsByCode", JSON.stringify(groupsByCode));
      localStorage.setItem("keysOfGroups", JSON.stringify(keysOfGroups));
      localStorage.setItem("valuesUniques", JSON.stringify(valuesUniques));
      localStorage.setItem("excelData", JSON.stringify(excelData));
      // const eventData = {
      //   nameEvent: nameEvent,
      //   data: data,
      // };
      // saveEventData(eventData); hacer funcionar para guardar el eventData en archivo JSON con electron
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/data");
      }, 1000);
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
    <div className="mt-16 flex items-center flex-col">
 <FormUploader handleSubmit={handleSubmit} setNameEvent={setNameEvent} handleFileUpload={handleFileUpload}/>
    </div>
  );
}
