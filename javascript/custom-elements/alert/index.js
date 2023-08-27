import BaseComponent from "../../base/index.js";

class Alert extends BaseComponent {
	#COMPONENT_NAME;

	constructor() {
		super();

		this.#COMPONENT_NAME = "alert";

		this.#main();
	}

	#main() {
		this.#eventDelegation();
	}

	#eventDelegation() {
		const HTMLRootElement = this.getRootElement();

		HTMLRootElement.addEventListener("click", (event) => {
			const currentTargetElementSelector = `[${this.getDataAttributeComponent()}]`;
			const currentTargetElement = event.target.closest(currentTargetElementSelector);

			if (currentTargetElement !== null) {
				const currentTargetElementName = currentTargetElement.getAttribute(this.getDataAttributeComponent()).trim();

				if (currentTargetElementName === this.#COMPONENT_NAME) {
					const alert = currentTargetElement.parentElement;
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
