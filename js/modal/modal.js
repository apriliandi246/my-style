import { listener, self } from "../utils/dom.js";
import { showModal, hideModal } from "../utils/component.js";

listener(document.querySelector(".modal"), "click", self(hideModal));
listener(document.querySelector(".modal-trigger-button"), "click", showModal);
listener(document.querySelector(".modal__cancel-button"), "click", hideModal);
