const dropdownButton = document.querySelector(".dropdown__button");
const dropdownContent = document.querySelector(".dropdown__content");

dropdownButton.addEventListener("click", function () {
   dropdownButton.classList.toggle("dropdown__button--active");
   dropdownContent.style.display === "block"
      ? setDisplayValue("none")
      : setDisplayValue("block");
});

function setDisplayValue(value) {
   dropdownContent.style.display = value;
}
