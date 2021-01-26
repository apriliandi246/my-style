// alert component
export function removeAlert() {
   this.parentElement.remove();
}

export function hideAlert() {
   this.parentElement.style.display = "none";
}

// dropdown component
export function toggleContent() {
   const dropdownContent = this.nextElementSibling;
   this.classList.toggle("dropdown__button--active");

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
export function toggleMenu() {
   this.parentElement.childNodes[3].classList.toggle("navbar--slide");
}

// collapse component
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
