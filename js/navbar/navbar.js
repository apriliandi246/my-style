import listener from "../utils/listener.js";

listener(document.querySelector(".toggle-menu"), "click", navbarToggle);

function navbarToggle() {
   document.querySelector(".navbar__items").classList.toggle("navbar--slide");
}
