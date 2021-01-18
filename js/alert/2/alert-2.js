import { listener } from "../../utils/dom.js";
import { hideAlert } from "../../utils/component.js";

const alert = document.getElementsByClassName("alert__close-button");

for (let index = 0; index < alert.length; index++) {
   listener(alert[index], "click", hideAlert);
}
