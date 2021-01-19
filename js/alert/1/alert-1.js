import { listener } from "../../utils/dom.js";
import { removeAlert } from "../../utils/component.js";

listener(document.getElementById("alert__close-button"), "click", removeAlert);
