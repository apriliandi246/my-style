// For one collapse component

import { listener, self } from "../utils//dom.js";

listener(
   document.querySelector(".collapse__head"),
   "click",
   self(collapseToggle)
);

function collapseToggle(event) {
   const icon = event.target.firstElementChild;
   const collapseContent = event.target.nextElementSibling;

   event.target.classList.toggle("collapse__head--active");

   if (collapseContent.style.display === "block") {
      collapseContent.style.display = "none";
      icon.textContent = "▲";
   } else {
      collapseContent.style.display = "block";
      icon.textContent = "▼";
   }
}
