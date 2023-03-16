/**
 * Procesa un archivo de Excel y devuelve los datos en formato JSON.
 *
 * @param {File} excelFile - El archivo de Excel a procesar.
 * 
 * @returns {Array} - Los datos del archivo de Excel en formato JSON.
 */


import * as XLSX from "xlsx";

export function processExcelFile(excelFile) {
  const workbook = XLSX.read(excelFile);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(worksheet);
  return data;
}
