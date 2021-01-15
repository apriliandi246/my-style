import { listener } from "../utils/utils.js";
import { toggleContent } from "../utils/dom.js";

document
   .querySelectorAll(".dropdown__button")
   .forEach((dropdown) => listener(dropdown, "click", toggleContent));
