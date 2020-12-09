import listener from "../utils/listener.js";

const toggleMenu = document.querySelector(".toggle-menu");

listener(toggleMenu, "click", navbarToggle);

function navbarToggle() {
   document.querySelector(".navbar__items").classList.toggle("navbar--slide");
}
