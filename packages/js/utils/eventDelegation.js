class EventDelegation {
	#DELEGATION_ROOT_ELEMENT;
	#COMPONENT_DATA_ATTRIBUTE;

	constructor() {
		this.#COMPONENT_DATA_ATTRIBUTE = "data-han-element-name";
		this.#DELEGATION_ROOT_ELEMENT = document.documentElement;
	}

	eventDelegationHTML(eventTarget) {
		let currentTargetElementName = null;
		const currentTargetElementSelector = `[${this.#COMPONENT_DATA_ATTRIBUTE}]`;
		const currentTargetElement = eventTarget.closest(currentTargetElementSelector);

		if (currentTargetElement !== null) {
			currentTargetElementName = currentTargetElement.getAttribute(this.#COMPONENT_DATA_ATTRIBUTE).trim();
		}

		return { currentTargetElement, currentTargetElementName };
	}

	getRootElement() {
		return this.#DELEGATION_ROOT_ELEMENT;
	}
}

export default EventDelegation;
