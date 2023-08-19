import BaseComponent from "../../base/index.js";

class Alert extends BaseComponent {
	#rootElement;
	#componentName;
	#dataAttributeComponent;

	constructor() {
		super();

		this.#componentName = "alert";
		this.#rootElement = this.getRootElement();
		this.#dataAttributeComponent = this.getDataAttributeComponent();

		this.#main();
	}

	#main() {
		this.#eventDelegation();
	}

	#eventDelegation() {
		this.#rootElement.addEventListener("click", (event) => {
			const currentElementTarget = event.target.closest(`[${this.#dataAttributeComponent}]`);

			if (currentElementTarget !== null) {
				const currentComponentName = currentElementTarget.getAttribute(this.#dataAttributeComponent).trim();

				if (currentComponentName === this.#componentName) {
					this.#close(currentElementTarget);
				}
			}
		});
	}

	#close(element) {
		const alert = element.parentElement;
		alert.remove();
	}
}

new Alert();
