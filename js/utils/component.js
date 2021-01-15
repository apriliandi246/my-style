// alert component
export function removeAlert(event) {
   event.target.parentElement.remove();
}

export function changeDisplayValue(event) {
   event.target.parentElement.style.display = "none";
}

// dropdown component
export function toggleContent(event) {
   const dropdownContent = event.target.nextElementSibling;

   event.target.classList.toggle("dropdown__button--active");

   if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
   } else {
      dropdownContent.style.display = "block";
   }
}

// modal component
export function hideModal() {
   document.querySelector(".modal").style.display = "none";
}

export function showModal() {
   document.querySelector(".modal").style.display = "block";
}

// navbar component
export function toggleMenu(event) {
   event.target.parentElement.previousElementSibling.classList.toggle(
      "navbar--slide"
   );
}

// collapse component
export function toogleCollapse(event) {
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

export function toggleCollapses(event) {
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
