import {
   listener,
   removeAlert,
   changeDisplayValue,
} from "../../utils/utils.js";

listener(
   document.querySelector(".alert__close-button"),
   "click",
   changeDisplayValue
);
