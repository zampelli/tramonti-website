const dinnerBtn = document.querySelector(".dinner-btn");
const dinnerPDF = document.querySelector(".dinner-pdf");
const drinkBtn = document.querySelector(".drink-btn");
const drinkPDF = document.querySelector(".drink-pdf");
const closePDF = document.querySelector(".close-btn");


dinnerBtn.addEventListener("click", () => {
  dinnerPDF.style.display = "block";
});

drinkBtn.addEventListener("click", () => {
    drinkPDF.style.display = "block";
  });

closePDF.addEventListener("click", () => {
  dinnerPDF.style.display = "none";
  console.log("click")
});



