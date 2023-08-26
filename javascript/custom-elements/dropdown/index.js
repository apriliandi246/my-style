import BaseComponent from "../../base/index.js";

class Dropdown extends BaseComponent {
	#rootElement;
	#componentName;
	#dropdownActive;
	#dataAttributeComponent;
	#CSSVariableVisibilityMenu;

	constructor() {
		super();

		this.#dropdownActive = null;
		this.#componentName = "dropdown";
		this.#rootElement = this.getRootElement();
		this.#dataAttributeComponent = this.getDataAttributeComponent();
		this.#CSSVariableVisibilityMenu = "--mys-dropdown-menu-visibility-status";

		this.#main();
	}

	#main() {
		this.#eventDelegation();
		this.#escape();
	}

	#eventDelegation() {
		this.#rootElement.addEventListener("click", (event) => {
			const currentElementTarget = event.target.closest(`[${this.#dataAttributeComponent}]`);

			if (currentElementTarget !== null) {
				const currentComponentName = currentElementTarget.getAttribute(this.#dataAttributeComponent).trim();

				if (currentComponentName === this.#componentName) {
					this.#toggle(currentElementTarget);
				}
			}

			// Click outside
			if (currentElementTarget === null && this.#dropdownActive !== null) {
				this.#toggle(this.#dropdownActive);
			}
		});
	}

	#toggle(element) {
		const dropdownBtn = element;
		const dropdownMenu = dropdownBtn.nextElementSibling;

		if (this.#dropdownActive === null) {
			dropdownMenu.style.setProperty(this.#CSSVariableVisibilityMenu, "block");
			dropdownBtn.setAttribute("aria-expanded", "true");
			this.#dropdownActive = dropdownBtn;

			return;
		}

		if (this.#dropdownActive === dropdownBtn) {
			dropdownMenu.style.setProperty(this.#CSSVariableVisibilityMenu, "none");
			dropdownBtn.setAttribute("aria-expanded", "false");
			this.#dropdownActive = null;

			return;
		}

		if (this.#dropdownActive !== null && this.#dropdownActive !== dropdownBtn) {
			const dropdownMenuActive = this.#dropdownActive.nextElementSibling;

			dropdownMenuActive.style.setProperty(this.#CSSVariableVisibilityMenu, "none");
			this.#dropdownActive.setAttribute("aria-expanded", "false");

			dropdownMenu.style.setProperty(this.#CSSVariableVisibilityMenu, "block");
			dropdownBtn.setAttribute("aria-expanded", "true");

			this.#dropdownActive = dropdownBtn;

			return;
		}
	}

	#escape() {
		this.#rootElement.addEventListener("keydown", (event) => {
			const keyboardKey = event.key.toLowerCase().trim();

			if (keyboardKey === "escape") {
				this.#toggle(this.#dropdownActive);
			}
		});
	}
}

new Dropdown();
