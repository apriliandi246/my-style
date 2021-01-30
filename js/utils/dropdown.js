export function toggleContent() {
   const dropdownContent = this.nextElementSibling;
   this.classList.toggle("dropdown__button--active");

   if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
   } else {
      dropdownContent.style.display = "block";
   }
}
