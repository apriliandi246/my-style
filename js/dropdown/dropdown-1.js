import { listener } from "../utils/dom.js";
import { toggleContent } from "../utils/component.js";

listener(document.querySelector(".dropdown__button"), "click", toggleContent);
