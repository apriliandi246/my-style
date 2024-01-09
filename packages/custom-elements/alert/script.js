import EventDelegation from "../../js/utils/eventDelegation.js";

class Alert {
	#rootElement;
	#COMPONENT_NAME;
	#containerDataAttr;
	#eventDelegationRootElement;

	constructor() {
		this.#COMPONENT_NAME = "alert";
		this.#containerDataAttr = "data-han-alert-container";

		this.#eventDelegationRootElement = new EventDelegation();
		this.#rootElement = this.#eventDelegationRootElement.getRootElement();

		this.#main();
	}

	#main() {
		this.#close();
	}

	#close() {
		this.#rootElement.addEventListener("click", (event) => {
			const elementTargetData = this.#eventDelegationRootElement.eventDelegationHTML(event.target);
			const { currentTargetElement, currentTargetElementName } = elementTargetData;

			if (currentTargetElementName === this.#COMPONENT_NAME && currentTargetElement !== null) {
				const alertElement = currentTargetElement.closest(`[${this.#containerDataAttr}]`);

				alertElement.remove();
			}
		});
	}
}

export default Alert;
