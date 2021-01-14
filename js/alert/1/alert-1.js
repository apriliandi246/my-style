import { listener, removeAlert } from "../../utils/utils.js";

listener(document.querySelector(".alert__close-button"), "click", removeAlert);
