// For one collapse component

import { listener } from "../utils//dom.js";
import { toggleCollapse } from "../utils/collapse.js";

listener(document.getElementById("collapse__head"), "click", toggleCollapse);
