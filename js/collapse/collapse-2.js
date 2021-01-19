// For more than one collapse component

import { listener } from "../utils/dom.js";
import { toggleCollapse } from "../utils/component.js";

listener(document.getElementById("collapses"), "click", toggleCollapse);
