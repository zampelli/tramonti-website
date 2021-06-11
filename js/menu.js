const dinnerBtn = document.querySelector(".dinner-btn");
const dinnerPDF = document.querySelector(".dinner-pdf");
const drinkBtn = document.querySelector(".drink-btn");
const drinkPDF = document.querySelector(".drink-pdf");
const dessertPDF = document.querySelector(".dessert-pdf");
const dessertBtn = document.querySelector(".dessert-btn");
const closeDinnerPDF = document.querySelector(".close-btn");
const closeDrinkPDF = document.querySelector(".close-btn2");
const closeDessertPDF = document.querySelector(".close-btn3");


dinnerBtn.addEventListener("click", () => {
  dinnerPDF.style.display = "block";
});

drinkBtn.addEventListener("click", () => {
    drinkPDF.style.display = "block";
});

dessertBtn.addEventListener("click", () => {
    dessertPDF.style.display = "block";
});

closeDinnerPDF.addEventListener("click", () => {
  dinnerPDF.style.display = "none";
});

closeDrinkPDF.addEventListener("click", () => {
    drinkPDF.style.display = "none";
})

closeDessertPDF.addEventListener("click", () => {
    dessertPDF.style.display = "none";
})



