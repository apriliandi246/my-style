import { listener } from "../../utils/dom.js";
import { hideAlert } from "../../utils/alert.js";

listener(document.getElementById("alert__close-button"), "click", hideAlert);
