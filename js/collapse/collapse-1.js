import listener from "../utils/listener.js";

// For one collapse component

listener(document.querySelector(".collapse__head"), "click", collapseToggle);

function collapseToggle(event) {
   const collapseContent = event.target.nextElementSibling;
   event.target.classList.toggle("collapse__head--active");

   if (collapseContent.style.display === "block") {
      collapseContent.style.display = "none";
      document.querySelector(".collapse__icon").textContent = "▲";
   } else {
      collapseContent.style.display = "block";
      document.querySelector(".collapse__icon").textContent = "▼";
   }
}
