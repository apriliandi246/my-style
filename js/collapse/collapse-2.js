// For more than one collapse component

import { listener } from "../utils/dom.js";
import { toggleCollapses } from "../utils/component.js";

listener(document.querySelector(".collapses"), "click", toggleCollapses);
