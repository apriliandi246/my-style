import { listener } from "../utils/dom.js";
import { toggleMenu } from "../utils/navbar.js";

listener(document.getElementById("toggle-menu"), "click", toggleMenu);
