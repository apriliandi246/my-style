import EventDelegation from "../../js/utils/eventDelegation.js";

class Dropdown {
	#rootElement;
	#COMPONENT_NAME;
	#dropdownActiveElement;
	#eventDelegationRootElement;
	#dropdownMenuCSSVariableVisibility;

	constructor() {
		// component state
		this.#dropdownActiveElement = null;

		this.#COMPONENT_NAME = "dropdown";
		this.#dropdownMenuCSSVariableVisibility = "--mys-dropdown-menu-visibility-status";

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
		const dropdownBtnElement = element;
		const dropdownMenuElement = dropdownBtnElement.nextElementSibling;

		if (this.#dropdownActiveElement === null) {
			dropdownMenuElement.style.setProperty(this.#dropdownMenuCSSVariableVisibility, "block");
			dropdownBtnElement.setAttribute("aria-expanded", "true");

			this.#dropdownActiveElement = dropdownBtnElement;

			return;
		}

		if (this.#dropdownActiveElement === dropdownBtnElement) {
			dropdownMenuElement.style.setProperty(this.#dropdownMenuCSSVariableVisibility, "none");
			dropdownBtnElement.setAttribute("aria-expanded", "false");

			this.#dropdownActiveElement = null;

			return;
		}

		if (this.#dropdownActiveElement !== null && this.#dropdownActiveElement !== dropdownBtnElement) {
			const dropdownMenuElementActive = this.#dropdownActiveElement.nextElementSibling;

			dropdownMenuElementActive.style.setProperty(this.#dropdownMenuCSSVariableVisibility, "none");
			this.#dropdownActiveElement.setAttribute("aria-expanded", "false");

			dropdownMenuElement.style.setProperty(this.#dropdownMenuCSSVariableVisibility, "block");
			dropdownBtnElement.setAttribute("aria-expanded", "true");

			this.#dropdownActiveElement = dropdownBtnElement;

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
