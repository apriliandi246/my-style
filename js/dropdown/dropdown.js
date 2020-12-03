const dropdownButton = document.querySelector(".dropdown__button");
const dropdownContent = document.querySelector(".dropdown__content");

dropdownButton.addEventListener("click", () => {
   dropdownButton.classList.toggle("dropdown__button--active");

   dropdownContent.style.display === "block"
      ? (dropdownContent.style.display = "none")
      : (dropdownContent.style.display = "block");

   return () =>
      dropdownButton.removeEventListener("click", () => {
         dropdownButton.classList.toggle("dropdown__button--active");

         dropdownContent.style.display === "block"
            ? (dropdownContent.style.display = "none")
            : (dropdownContent.style.display = "block");
      });
});
