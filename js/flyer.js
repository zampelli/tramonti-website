//Reastaurant week modal
const flyer = document.querySelector(".modal");
const closeIt = document.querySelector(".close");

//show modal 1.5second after page ready
function popUp(time) {
  return (time = setTimeout(() => {
    flyer.classList.add("zoomIn");
    flyer.style.display = "block";
  }, 1800));
}
//close on click
function popOff() {
  flyer.style.display = "none";
}

popUp();
closeIt.addEventListener("click", popOff);
