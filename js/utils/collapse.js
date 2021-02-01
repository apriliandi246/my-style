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
      icon.textContent = "▲";
      collapseContent.style.display = "none";
   } else {
      icon.textContent = "▼";
      collapseContent.style.display = "block";
   }
}

export function collAccordion(event) {
   if (
      event.target.classList[0] !== "collapse__head" &&
      event.target.classList[0] !== "collapse__icon"
   ) {
      return;
   }

   const childs = this.children;
   let icon, collapseContent, currentColl;

   if (event.target.classList[0] === "collapse__head") {
      icon = event.target.firstElementChild;
      currentColl = event.target.getAttribute("id");
      collapseContent = event.target.nextElementSibling;
      event.target.classList.toggle("collapse__head--active");
   }

   if (event.target.classList[0] === "collapse__icon") {
      icon = event.target;
      currentColl = event.target.parentElement.getAttribute("id");
      collapseContent = event.target.parentElement.nextElementSibling;
      event.target.parentElement.classList.toggle("collapse__head--active");
   }

   if (collapseContent.style.display === "block") {
      icon.textContent = "▲";
      collapseContent.style.display = "none";
   } else {
      icon.textContent = "▼";
      collapseContent.style.display = "block";
   }

   for (let index = 0; index < childs.length; index++) {
      if (childs[index].firstElementChild.getAttribute("id") !== currentColl) {
         childs[index].firstElementChild.firstElementChild.textContent = "▲";
         childs[index].firstElementChild.nextElementSibling.style.display =
            "none";
         childs[index].firstElementChild.classList.remove(
            "collapse__head--active"
         );
      }
   }
}
