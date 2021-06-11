const dinnerBtn = document.querySelector(".dinner-btn");
const dinnerPDF = document.querySelector(".dinner-pdf");
const closePDF = document.querySelector(".close-btn");

dinnerBtn.addEventListener("click", () => {
  dinnerPDF.style.display = "block";
});

closePDF.addEventListener("click", () => {
  dinnerPDF.style.display = "none";
});
