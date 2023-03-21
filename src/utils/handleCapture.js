import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const handleCapture = (typePyramid) => {

  let contenido = document.getElementById("capture");

  // Opcionalmente, descargar también una imagen PNG de la pirámide
  html2canvas(contenido).then((canvas) => {
    let link = document.createElement("a");
    link.download = `Piramide de ${typePyramid}.png`;
    link.href = canvas.toDataURL();
    link.click();
  });

  // Convertir la imagen en PDF y descargarla
  html2canvas(contenido).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdfDoc = new jsPDF('p', 'pt', 'letter');
    const width = pdfDoc.internal.pageSize.getWidth();
    const height = pdfDoc.internal.pageSize.getHeight();
    pdfDoc.addImage(imgData, 'PNG', 0, 0, width, height);
    pdfDoc.save(`Piramide de ${typePyramid}.pdf`);
  });
}



//Descargar ambos archivos falta arreglar documento pdf
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

// export const handleCapture = (typePyramid) => {


//   // Opcionalmente, descargar también una imagen PNG de la pirámide
//   html2canvas(contenido).then((canvas) => {
//     let link = document.createElement("a");
//     link.download = `Piramide de ${typePyramid}.png`;
//     link.href = canvas.toDataURL();
//     link.click();
//   });

//   let contenido = document.getElementById("capture");
//   let pdfDoc = new jsPDF(
//     {
//       orientation: "portrait",
//       unit: "in",
//       format: [8.5, 11],
//     }
//     // {
//     //   orientation: "landscape",
//     //   unit: "in",
//     //   format: [4, 2]
//     // }
//   );
//   pdfDoc.html(contenido, {
//     callback: function () {
//       // Descargar el archivo PDF automáticamente
//       pdfDoc.save(`Piramide de ${typePyramid}.pdf`);
//     }
//   });
// }
