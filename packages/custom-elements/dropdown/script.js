import EventDelegation from "../../js/utils/eventDelegation.js";

class Dropdown {
	#rootElement;
	#COMPONENT_NAME;
	#dropdownBtnActiveElement;
	#eventDelegationRootElement;

	constructor() {
		/*
			this.#dropdownBtnActiveElement = null; // Initial state
			this.#dropdownBtnActiveElement = HTMLButtonElement; // Current active dropdown button
		*/
		this.#dropdownBtnActiveElement = null;

		this.#COMPONENT_NAME = "dropdown";

		this.#eventDelegationRootElement = new EventDelegation();
		this.#rootElement = this.#eventDelegationRootElement.getRootElement();

		this.#main();
	}

	#main() {
		this.#toggleClick();
		this.#keyboardEscape();
		this.#clickOutside();
	}

	#toggleClick() {
		this.#rootElement.addEventListener("click", (event) => {
			const elementTargetData = this.#eventDelegationRootElement.eventDelegationHTML(event.target);
			const { currentTargetElement, currentTargetElementName } = elementTargetData;

			if (currentTargetElementName === this.#COMPONENT_NAME && currentTargetElement !== null) {
				this.#toggle(currentTargetElement);
			}
		});
	}

	#clickOutside() {
		this.#rootElement.addEventListener("click", (event) => {
			const elementTargetData = this.#eventDelegationRootElement.eventDelegationHTML(event.target);
			const { currentTargetElement } = elementTargetData;

			if (currentTargetElement === null && this.#dropdownBtnActiveElement !== null) {
				this.#toggle(this.#dropdownBtnActiveElement);
			}
		});
	}

	#keyboardEscape() {
		this.#rootElement.addEventListener("keydown", (event) => {
			const keyboardKey = event.key;

			if (this.#dropdownBtnActiveElement !== null && keyboardKey === "Escape") {
				this.#toggle(this.#dropdownBtnActiveElement);
			}
		});
	}

	/*
		Toggle hide or show for dropdown content
	*/
	#toggle(element) {
		const btnElement = element;
		const menuElement = btnElement.nextElementSibling;

		if (this.#dropdownBtnActiveElement === null) {
			this.#dropdownBtnActiveElement = btnElement;

			menuElement.style.removeProperty("display");
			btnElement.setAttribute("aria-expanded", "true");

			return;
		}

		if (this.#dropdownBtnActiveElement === btnElement) {
			this.#dropdownBtnActiveElement = null;

			menuElement.style.display = "none";
			btnElement.setAttribute("aria-expanded", "false");

			return;
		}

		if (this.#dropdownBtnActiveElement !== null && this.#dropdownBtnActiveElement !== btnElement) {
			const menuElementActive = this.#dropdownBtnActiveElement.nextElementSibling;

			menuElementActive.style.display = "none";
			this.#dropdownBtnActiveElement.setAttribute("aria-expanded", "false");

			menuElement.style.removeProperty("display");
			btnElement.setAttribute("aria-expanded", "true");

			this.#dropdownBtnActiveElement = btnElement;

			return;
		}
	}
}

export default Dropdown;
