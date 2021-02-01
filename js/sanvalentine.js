const btns = document.querySelectorAll(".btn");
const meat = document.querySelector(".meat-lovers");
const fish = document.querySelector(".fishy-affair");
const veg = document.querySelector(".veg-crush");

// function to keep track of active class
function addActive(e) {
  const elems = document.querySelector(".active");
  if (elems !== null) {
    elems.classList.remove("active");
  }
  e.target.className = "active";
}

// if class active show the rigth menu, I know its a mess I need to clean up
function showContent() {
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", addActive);
    btns[0].addEventListener("click", () => {
        meat.classList.replace("off","on");
        fish.classList.replace("on","off");
        veg.classList.replace("on","off");
    })
    btns[1].addEventListener("click", () => {
        fish.classList.replace("off","on");
        meat.classList.replace("on","off");
        veg.classList.replace("on","off");
    })
    btns[2].addEventListener("click", () => {
        veg.classList.replace("off","on");
        meat.classList.replace("on","off");
        fish.classList.replace("on","off");
    })
  }
}

showContent();