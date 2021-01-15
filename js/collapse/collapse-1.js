// For one collapse component

import { listener, self } from "../utils//dom.js";
import { toogleCollapse } from "../utils/component.js";

listener(
   document.querySelector(".collapse__head"),
   "click",
   self(toogleCollapse)
);
