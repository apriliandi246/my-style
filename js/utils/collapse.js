export function toggleCollapse(event) {
   if (
      event.target.classList[0] !== "collapse__head" &&
      event.target.classList[0] !== "collapse__icon"
   ) {
      return;
   }

   let icon, collapseContent;

   if (event.target.classList[0] === "collapse__head") {
      icon = event.target.firstElementChild;
      collapseContent = event.target.nextElementSibling;
      event.target.classList.toggle("collapse__head--active");
   }

   if (event.target.classList[0] === "collapse__icon") {
      icon = event.target;
      collapseContent = event.target.parentElement.nextElementSibling;
      event.target.parentElement.classList.toggle("collapse__head--active");
   }

   if (collapseContent.style.display === "block") {
      collapseContent.style.display = "none";
      icon.textContent = "▲";
   } else {
      collapseContent.style.display = "block";
      icon.textContent = "▼";
   }
}
