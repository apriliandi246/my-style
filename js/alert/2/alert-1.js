import { listener } from "../../utils/dom.js";
import { removeAlert } from "../../utils/component.js";

document
   .querySelectorAll(".alert__close-button")
   .forEach((icon) => listener(icon, "click", removeAlert));
