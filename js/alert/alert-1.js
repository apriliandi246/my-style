// ! For one alert

// remove from DOM
const closeIconDom = document.querySelector(".alert__close-button");

closeIconDom.addEventListener("click", (event) => {
   event.target.parentElement.remove();

   return () =>
      closeIconDom.removeEventListener("click", (event) => {
         event.target.parentElement.remove();
      });
});

// just change the display style
const closeIconStyle = document.querySelector(".alert__close-button");

closeIconStyle.addEventListener("click", (event) => {
   event.target.parentElement.style.display = "none";

   return () =>
      closeIconStyle.removeEventListener("click", (event) => {
         event.target.parentElement.style.display = "none";
      });
});
