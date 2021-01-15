import { listener } from "../utils/dom.js";
import { toggleContent } from "../utils/component.js";

document
   .querySelectorAll(".dropdown__button")
   .forEach((dropdown) => listener(dropdown, "click", toggleContent));
