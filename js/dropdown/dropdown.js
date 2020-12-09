import listener from "../utils/listener.js";

const dropdownButton = document.querySelector(".dropdown__button");

listener(dropdownButton, "click", dropdownToggle);

function dropdownToggle(event) {
   const dropdownContent = document.querySelector(".dropdown__content");
   event.target.classList.toggle("dropdown__button--active");

   dropdownContent.style.display === "block"
      ? (dropdownContent.style.display = "none")
      : (dropdownContent.style.display = "block");
}
