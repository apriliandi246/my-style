import { listener } from "../utils/utils.js";

listener(document.querySelector(".dropdown__button"), "click", toggleContent);

function toggleContent(event) {
   const dropdownContent = event.target.nextElementSibling;

   event.target.classList.toggle("dropdown__button--active");

   if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
   } else {
      dropdownContent.style.display = "block";
   }
}
