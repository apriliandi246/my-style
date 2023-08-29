import EventDelegation from "../../event-delegation/index.js";

class Alert {
	#rootElement;
	#COMPONENT_NAME;
	#eventDelegationRootElement;

	constructor() {
		this.#COMPONENT_NAME = "alert";

		this.#eventDelegationRootElement = new EventDelegation();
		this.#rootElement = this.#eventDelegationRootElement.getRootElement();

		this.#main();
	}

	#main() {
		this.#eventDelegation();
	}

	#eventDelegation() {
		this.#rootElement.addEventListener("click", (event) => {
			const elementTargetData = this.#eventDelegationRootElement.eventDelegationHTML(event.target);
			const { currentTargetElement, currentTargetElementName } = elementTargetData;

			if (currentTargetElementName === this.#COMPONENT_NAME && currentTargetElement !== null) {
				const alert = currentTargetElement.parentElement;
				this.#close(alert);
			}
		});
	}

	#close(alert) {
		alert.remove();
	}
}

new Alert();
