import listener from "../utils/listener.js";

// For one collapse component
const collapseButton = document.querySelector(".collapse__button");

listener(collapseButton, "click", collapseToggle);

function collapseToggle(event) {
   const collapseContent = event.target.nextElementSibling;
   event.target.classList.toggle("collapse__button--active");

   if (collapseContent.style.display === "block") {
      collapseContent.style.display = "none";
      document.querySelector(".collapse__icon").innerHTML = "&#9650;";
   } else {
      collapseContent.style.display = "block";
      document.querySelector(".collapse__icon").innerHTML = "&#9660;";
   }
}
