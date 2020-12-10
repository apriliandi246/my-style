import listener from "../utils/listener.js";

listener(document.querySelector(".toggle-menu"), "click", toggleMenu);

function toggleMenu() {
   document.querySelector(".navbar__items").classList.toggle("navbar--slide");
}
