// For one collapse component

import { listener, self } from "../utils//dom.js";
import { toggleCollapse } from "../utils/component.js";

listener(document.getElementById("collapse__head"), "click", toggleCollapse);
