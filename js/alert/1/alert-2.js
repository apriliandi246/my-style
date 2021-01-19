import { listener } from "../../utils/dom.js";
import { hideAlert } from "../../utils/component.js";

listener(document.getElementById("alert__close-button"), "click", hideAlert);
