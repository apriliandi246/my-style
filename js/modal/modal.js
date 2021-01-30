import { listener, self } from "../utils/dom.js";
import { showModal, hideModal } from "../utils/modal.js";

listener(document.getElementById("modal-trigger"), "click", showModal);
listener(document.getElementById("modal__area"), "click", self(hideModal));
listener(document.getElementById("modal__close-button"), "click", hideModal);
