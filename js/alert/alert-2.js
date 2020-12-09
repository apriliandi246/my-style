import listener from "../utils/listener.js";

// ! For more than one alert
const closeButtons = document.querySelectorAll(".alert__close-button");

// remove from DOM
for (let index = 0; index < closeButtons.length; index++) {
   listener(closeButtons[index], "click", removeAlert);
}

function removeAlert(event) {
   event.target.parentElement.remove();
}

// just change the display style
for (let index = 0; index < closeButtons.length; index++) {
   listener(closeButtons[index], "click", changeDisplayValue);
}

function changeDisplayValue(event) {
   event.target.parentElement.style.display = "none";
}
