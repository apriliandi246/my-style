import { listener } from "../utils/dom.js";
import { collAccordion } from "../utils/collapse.js";

listener(document.getElementById("collapses"), "click", collAccordion);
