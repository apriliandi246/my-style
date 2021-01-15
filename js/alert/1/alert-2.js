import { listener } from "../../utils/dom.js";
import { changeDisplayValue } from "../../utils/component.js";

listener(
   document.querySelector(".alert__close-button"),
   "click",
   changeDisplayValue
);
