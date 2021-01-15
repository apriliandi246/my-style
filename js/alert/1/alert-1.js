import { listener } from "../../utils/dom.js";
import { removeAlert } from "../../utils/component.js";

listener(document.querySelector(".alert__close-button"), "click", removeAlert);
