import { listener, self } from "../utils/utils.js";

listener(document.querySelector(".modal-trigger-button"), "click", showModal);
listener(document.querySelector(".modal__cancel-button"), "click", hideModal);
listener(document.querySelector(".modal"), "click", self(hideModal));

function hideModal() {
   document.querySelector(".modal").style.display = "none";
}

function showModal() {
   document.querySelector(".modal").style.display = "block";
}
