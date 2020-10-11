// ! For one alert
document
   .querySelector(".alert__close-button")
   .addEventListener("click", function () {
      event.target.parentElement.remove();
   });
