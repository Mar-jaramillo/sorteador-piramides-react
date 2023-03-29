import * as XLSX from "xlsx";

export const excelToJson = (excelFile) => {
  if (excelFile !== null) {
    const workbook = XLSX.read(excelFile);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(worksheet);
    return data;
  } else {
    return null;
  }
};
