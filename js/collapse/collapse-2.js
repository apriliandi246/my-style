import listener from "../utils/listener.js";

// For more than one collapse component
const collapses = document.querySelector(".collapses");

listener(collapses, "click", toggleCollapse);

function toggleCollapse(event) {
   if (event.target.classList[0] !== "collapse__button") return;

   let collapseButton = event.target;
   let buttonIcon = collapseButton.firstElementChild;
   let collapseContent = event.target.nextElementSibling;

   collapseButton.classList.toggle("collapse__button--active");

   if (collapseContent.style.display === "block") {
      buttonIcon.innerHTML = "&#9650;";
      collapseContent.style.display = "none";
   } else {
      buttonIcon.innerHTML = "&#9660;";
      collapseContent.style.display = "block";
   }
}
