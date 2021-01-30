import { listener } from "../utils/dom.js";
import { toggleContent } from "../utils/dropdown.js";

listener(document.getElementById("dropdown__button"), "click", toggleContent);
