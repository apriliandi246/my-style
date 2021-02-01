import { listener } from "../../utils/dom.js";
import { hideAlert } from "../../utils/alert.js";

const alertComponents = document.getElementsByClassName("alert__close-button");

for (let index = 0; index < alertComponents.length; index++) {
   listener(alertComponents[index], "click", hideAlert);
}
