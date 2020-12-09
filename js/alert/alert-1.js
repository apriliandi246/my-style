import listener from "../utils/listener.js";

// ! For one alert
const closeIcon = document.querySelector(".alert__close-button");

// remove from DOM
listener(closeIcon, "click", removeAlert);

function removeAlert(event) {
   event.target.parentElement.remove();
}

// just change the display style
listener(closeIcon, "click", changeDisplayValue);

function changeDisplayValue(event) {
   event.target.parentElement.style.display = "none";
}
