// ! For more than one alert

const closeButton = document.querySelectorAll(".alert__close-button");

// remove from DOM
for (let index = 0; index < closeButton.length; index++) {
   closeButton[index].addEventListener("click", () => {
      closeButton[index].parentElement.remove();
   });
}

// just change the display style
for (let index = 0; index < closeButton.length; index++) {
   closeButton[index].addEventListener("click", () => {
      closeButton[index].parentElement.style.display = "none";
   });
}
