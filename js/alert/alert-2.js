import listener from "../utils/listener.js";

// ! For more than one alert
const closeButton = document.querySelectorAll(".alert__close-button");

// remove from DOM
for (let index = 0; index < closeButton.length; index++) {
   listener(closeButton[index], "click", removeAlert);
}

function removeAlert(event) {
   event.target.parentElement.remove();
}

// just change the display style
for (let index = 0; index < closeButton.length; index++) {
   listener(closeButton[index], "click", changeDisplayValue);
}

function changeDisplayValue(event) {
   event.target.parentElement.style.display = "none";
}
