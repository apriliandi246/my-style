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
			const componentSelector = `[${this.getDataAttributeComponent()}]`;
			const currentElementTarget = event.target.closest(componentSelector);

			if (currentElementTarget !== null) {
				const currentComponentName = currentElementTarget.getAttribute(this.getDataAttributeComponent()).trim();

				if (currentComponentName === this.#componentName) {
					const alert = currentElementTarget.parentElement;
					this.#close(alert);
				}
			}
		});
	}

	#close(alert) {
		alert.remove();
	}
}

new Alert();
