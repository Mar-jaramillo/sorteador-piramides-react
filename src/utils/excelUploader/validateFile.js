/**
 * Valida si el archivo seleccionado es válido según su extensión o tipo MIME.
 * @param {File} file - Archivo seleccionado por el usuario.
 * @returns {boolean} - Verdadero si el archivo es válido, falso en caso contrario.
 */
export const validateFile = (file) => {
    // Validar extensión del archivo o su tipo MIME
    const validExtensions = ['.xls', '.xlsx', '.xlsm'];
    const fileExtension = file.name.substr(file.name.lastIndexOf('.'));
    const fileType = file.type;
  
    if (validExtensions.includes(fileExtension) || validExtensions.includes(fileType)) {
      return true;
    } else {
      return false;
    }
  }