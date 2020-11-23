// ! For one alert

// remove from DOM
document
   .querySelector(".alert__close-button")
   .addEventListener("click", (event) => {
      event.target.parentElement.remove();
   });

// just change the display style
document
   .querySelector(".alert__close-button")
   .addEventListener("click", (event) => {
      event.target.parentElement.style.display = "none";
   });
