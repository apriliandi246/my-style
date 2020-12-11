// ! For more than one alert component

import { listener } from "../utils/utils.js";

const closeIcons = document.querySelectorAll(".alert__close-button");

// remove from DOM
closeIcons.forEach((closeIcon) => listener(closeIcon, "click", removeAlert));

function removeAlert(event) {
   event.target.parentElement.remove();
}

// just change the display style
closeIcons.forEach((closeIcon) =>
   listener(closeIcon, "click", changeDisplayValue)
);

function changeDisplayValue(event) {
   event.target.parentElement.style.display = "none";
}
