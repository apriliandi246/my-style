import { listener } from "../utils/utils.js";

listener(document.querySelector(".toggle-menu"), "click", toggleMenu);

function toggleMenu(event) {
   event.target.parentElement.previousElementSibling.classList.toggle(
      "navbar--slide"
   );
}
