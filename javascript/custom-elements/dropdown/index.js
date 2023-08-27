import BaseComponent from "../../base/index.js";

class Dropdown extends BaseComponent {
	#COMPONENT_NAME;
	#HTMLRootElement;
	#dropdownActiveElement;
	#dropdownMenuCSSVariableVisibility;

	constructor() {
		super();

		// component state
		this.#dropdownActiveElement = null;

		this.#COMPONENT_NAME = "dropdown";
		this.#dropdownMenuCSSVariableVisibility = "--mys-dropdown-menu-visibility-status";

		this.#HTMLRootElement = this.getRootElement();

		this.#main();
	}

	#main() {
		this.#eventDelegation();
		this.#escape();
		this.#clickOutside();
	}

	#eventDelegation() {
		this.#HTMLRootElement.addEventListener("click", (event) => {
			const currentTargetElementSelector = `[${this.getDataAttributeComponent()}]`;
			const currentTargetElement = event.target.closest(currentTargetElementSelector);

			if (currentTargetElement !== null) {
				const currentTargetElementName = currentTargetElement.getAttribute(this.getDataAttributeComponent()).trim();

				if (currentTargetElementName === this.#COMPONENT_NAME) {
					this.#toggle(currentTargetElement);
				}
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
		this.#HTMLRootElement.addEventListener("keydown", (event) => {
			const keyboardKey = event.key.toLowerCase().trim();

			if (keyboardKey === "escape" && this.#dropdownActiveElement !== null) {
				this.#toggle(this.#dropdownActiveElement);
			}
		});
	}

	#clickOutside() {
		this.#HTMLRootElement.addEventListener("click", (event) => {
			const currentTargetElementSelector = `[${this.getDataAttributeComponent()}]`;
			const currentTargetElement = event.target.closest(currentTargetElementSelector);

			if (currentTargetElement === null && this.#dropdownActiveElement !== null) {
				this.#toggle(this.#dropdownActiveElement);
			}
		});
	}
}

new Dropdown();
