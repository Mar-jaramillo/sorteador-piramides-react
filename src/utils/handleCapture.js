import html2canvas from "html2canvas";

export const handleCapture = (typePyramid) => {
    var link = document.createElement("a");
    link.download = `Piramide de ${typePyramid}`;

    html2canvas(document.querySelector("#capture")).then((canvas) => {
      link.href = canvas.toDataURL();
      link.click();
    })
}