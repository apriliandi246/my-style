import { listener, removeAlert } from "../../utils/utils.js";

const closeIcons = document.querySelectorAll(".alert__close-button");
closeIcons.forEach((icon) => listener(icon, "click", removeAlert));
