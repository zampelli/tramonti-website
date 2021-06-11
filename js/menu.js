const dinnerBtn = document.querySelector(".dinner-btn");
const dinnerPDF = document.querySelector(".dinner-pdf");
const drinkBtn = document.querySelector(".drink-btn");
const drinkPDF = document.querySelector(".drink-pdf");
const closeDinnerPDF = document.querySelector(".close-btn");
const closeDrinkPDF = document.querySelector(".close-btn2");


dinnerBtn.addEventListener("click", () => {
  dinnerPDF.style.display = "block";
});

drinkBtn.addEventListener("click", () => {
    drinkPDF.style.display = "block";
  });

closeDinnerPDF.addEventListener("click", () => {
  dinnerPDF.style.display = "none";
});

closeDrinkPDF.addEventListener("click", () => {
    drinkPDF.style.display = "none";
})



