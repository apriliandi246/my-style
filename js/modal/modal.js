import listener from "../utils/listener.js";

const modalTrigger = document.querySelector(".modal-trigger-button");
const modalBtn = document.querySelector(".modal__cancel-button");

listener(modalTrigger, "click", showModal);
listener(modalBtn, "click", hideModal);

function hideModal() {
   document.querySelector(".modal").style.display = "none";
}

function showModal() {
   document.querySelector(".modal").style.display = "block";
}
