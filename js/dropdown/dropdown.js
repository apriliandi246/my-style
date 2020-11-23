const dropdownButton = document.querySelector(".dropdown__button");
const dropdownContent = document.querySelector(".dropdown__content");

dropdownButton.addEventListener("click", () => {
   dropdownButton.classList.toggle("dropdown__button--active");

   if (dropdownContent.style.display === "block") {
      setDisplayValue("none");
   } else {
      setDisplayValue("block");
   }
});

function setDisplayValue(value) {
   dropdownContent.style.display = value;
}
