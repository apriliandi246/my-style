import listener from "../utils/listener.js";

// For more than one collapse component

listener(document.querySelector(".collapses"), "click", toggleCollapse);

function toggleCollapse(event) {
   if (event.target.classList[0] !== "collapse__head") return;

   let collapseButton = event.target;
   let buttonIcon = collapseButton.firstElementChild;
   let collapseContent = event.target.nextElementSibling;

   collapseButton.classList.toggle("collapse__head--active");

   if (collapseContent.style.display === "block") {
      buttonIcon.textContent = "▲";
      collapseContent.style.display = "none";
   } else {
      buttonIcon.textContent = "▼";
      collapseContent.style.display = "block";
   }
}
