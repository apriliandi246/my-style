import { listener } from "../utils/dom.js";
import { toggleMenu } from "../utils/component.js";

listener(document.getElementById("toggle-menu"), "click", toggleMenu);
