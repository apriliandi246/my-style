import { listener, changeDisplayValue } from "../../utils/utils.js";

const closeIcons = document.querySelectorAll(".alert__close-button");
closeIcons.forEach((icon) => listener(icon, "click", changeDisplayValue));
