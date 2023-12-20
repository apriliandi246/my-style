import EventDelegation from "../../js/utils/eventDelegation.js";

class Dropdown {
	#rootElement;
	#COMPONENT_NAME;
	#dropdownActiveElement;
	#eventDelegationRootElement;

	constructor() {
		this.#dropdownActiveElement = null;

		this.#COMPONENT_NAME = "dropdown";

		this.#eventDelegationRootElement = new EventDelegation();
		this.#rootElement = this.#eventDelegationRootElement.getRootElement();

		this.#main();
	}

	#main() {
		this.#eventDelegation();
		this.#escape();
		this.#clickOutside();
	}

	#eventDelegation() {
		this.#rootElement.addEventListener("click", (event) => {
			const elementTargetData = this.#eventDelegationRootElement.eventDelegationHTML(event.target);
			const { currentTargetElement, currentTargetElementName } = elementTargetData;

			if (currentTargetElementName === this.#COMPONENT_NAME && currentTargetElement !== null) {
				this.#toggle(currentTargetElement);
			}
		});
	}

	#toggle(element) {
		const btnElement = element;
		const menuElement = btnElement.nextElementSibling;

		if (this.#dropdownActiveElement === null) {
			menuElement.style.display = "block";
			btnElement.setAttribute("aria-expanded", "true");

			this.#dropdownActiveElement = btnElement;

			return;
		}

		if (this.#dropdownActiveElement === btnElement) {
			menuElement.style.display = "none";
			btnElement.setAttribute("aria-expanded", "false");

			this.#dropdownActiveElement = null;

			return;
		}

		if (this.#dropdownActiveElement !== null && this.#dropdownActiveElement !== btnElement) {
			const menuElementActive = this.#dropdownActiveElement.nextElementSibling;

			menuElementActive.style.display = "none";
			this.#dropdownActiveElement.setAttribute("aria-expanded", "false");

			menuElement.style.display = "block";
			btnElement.setAttribute("aria-expanded", "true");

			this.#dropdownActiveElement = btnElement;

			return;
		}
	}

	#escape() {
		this.#rootElement.addEventListener("keydown", (event) => {
			const keyboardKey = event.key.toLowerCase().trim();

			if (keyboardKey === "escape" && this.#dropdownActiveElement !== null) {
				this.#toggle(this.#dropdownActiveElement);
			}
		});
	}

	#clickOutside() {
		this.#rootElement.addEventListener("click", (event) => {
			const elementTargetData = this.#eventDelegationRootElement.eventDelegationHTML(event.target);
			const { currentTargetElement } = elementTargetData;

			if (currentTargetElement === null && this.#dropdownActiveElement !== null) {
				this.#toggle(this.#dropdownActiveElement);
			}
		});
	}
}

new Dropdown();
