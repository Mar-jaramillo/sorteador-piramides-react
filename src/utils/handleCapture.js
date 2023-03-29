import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const handleCapture = (typePyramid, keyNameNow) => {
  let contenido = document.getElementById("capture");

  // Opcionalmente, descargar también una imagen PNG de la pirámide
  html2canvas(contenido, { scale: 2 }).then((canvas) => {
    let link = document.createElement("a");
    link.download = `Pirámide de ${typePyramid}  ${keyNameNow}.png`;
    link.href = canvas.toDataURL();
    link.click();
  });

  // Convertir la imagen en PDF y descargarla
  setTimeout(() => {
    html2canvas(contenido, { scale: 1 }).then((canvas) => {
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const pageSize = {
        width: 215.9, // Ancho de una página carta en mm
        height: 279.4 // Altura de una página carta en mm
      };
      const scale = Math.min(pageSize.width / imgWidth, pageSize.height / imgHeight);
      const imgWidthScaled = imgWidth * scale;
      const imgHeightScaled = imgHeight * scale;
      const xPos = (pageSize.width - imgWidthScaled) / 2; // Calcular la posición horizontal para centrar la imagen
      const yPos = (pageSize.height - imgHeightScaled) / 2; // Calcular la posición vertical para centrar la imagen
      const pdf = new jsPDF("p", "mm", "letter");
      pdf.addImage(
        canvas.toDataURL("image/jpeg"),
        "JPEG",
        xPos,
        yPos,
        imgWidthScaled,
        imgHeightScaled
      );
      pdf.save(`Piramide de ${typePyramid}  ${keyNameNow}.pdf`);
    });
  }, 1000);
}  

