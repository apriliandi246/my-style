import { listener } from "../../utils/dom.js";
import { changeDisplayValue } from "../../utils/component.js";

document
   .querySelectorAll(".alert__close-button")
   .forEach((icon) => listener(icon, "click", changeDisplayValue));
