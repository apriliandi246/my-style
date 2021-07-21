import { listener } from "../utils/dom.js";
import { toggleContent } from "../utils/dropdown.js";

const dropdown = document.getElementsByClassName("dropdown__button");

for (let index = 0; index < dropdown.length; index++) {
	listener(dropdown[index], "click", toggleContent);
}
