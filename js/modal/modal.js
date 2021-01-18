import { listener, self } from "../utils/dom.js";
import { showModal, hideModal } from "../utils/component.js";

const modalArea = document.getElementById("modal-area");
const hideBtn = modalArea.querySelector(".modal__close-button");

listener(hideBtn, "click", hideModal);
listener(modalArea, "click", self(hideModal));
listener(document.querySelector(".modal-trigger-button"), "click", showModal);
