import html2canvas from "html2canvas";

export const handleCapture = () => {
  var link = document.createElement("a");
  link.download = "Pyramid Number";
  console.log(document.querySelector("#capture"));
  html2canvas(document.querySelector("#capture")).then((canvas) => {
    link.href = canvas.toDataURL();
    link.click();
  });
};
