import BaseComponent from "../../base/index.js";

class Alert extends BaseComponent {
	#componentName;

	constructor() {
		super();

		this.#componentName = "alert";

		this.#main();
	}

	#main() {
		this.#eventDelegation();
	}

	#eventDelegation() {
		const HTMLRootElement = this.getRootElement();

		HTMLRootElement.addEventListener("click", (event) => {
			const currentElementTarget = event.target.closest(`[${this.getDataAttributeComponent()}]`);

			if (currentElementTarget !== null) {
				const currentComponentName = currentElementTarget.getAttribute(this.getDataAttributeComponent()).trim();

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
