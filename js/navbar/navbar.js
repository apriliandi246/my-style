import { listener } from "../utils/dom.js";
import { toggleMenu } from "../utils/component.js";

listener(document.querySelector(".toggle-menu"), "click", toggleMenu);
