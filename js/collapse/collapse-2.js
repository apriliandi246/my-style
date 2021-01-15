// For more than one collapse component

import { listener } from "../utils/dom.js";

listener(document.querySelector(".collapses"), "click", toggleCollapse);

function toggleCollapse(event) {
   if (event.target.classList[0] !== "collapse__head") return;

   let icon = event.target.firstElementChild;
   let collapseContent = event.target.nextElementSibling;

   event.target.classList.toggle("collapse__head--active");

   if (collapseContent.style.display === "block") {
      collapseContent.style.display = "none";
      icon.textContent = "▲";
   } else {
      collapseContent.style.display = "block";
      icon.textContent = "▼";
   }
}
