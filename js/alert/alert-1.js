// ! For one alert component

import { listener } from "../utils/utils.js";

// remove from DOM
listener(document.querySelector(".alert__close-button"), "click", removeAlert);

function removeAlert(event) {
   event.target.parentElement.remove();
}

// just change the display style
listener(
   document.querySelector(".alert__close-button"),
   "click",
   changeDisplayValue
);

function changeDisplayValue(event) {
   event.target.parentElement.style.display = "none";
}
