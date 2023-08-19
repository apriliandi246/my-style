class BaseComponent {
	#EVENT_DELEGATION_ROOT;
	#DATA_ATTRIBUTE_COMPONENT;

	constructor() {
		this.#DATA_ATTRIBUTE_COMPONENT = "data-mys-comp";
		this.#EVENT_DELEGATION_ROOT = document.documentElement;
	}

	getRootElement() {
		return this.#EVENT_DELEGATION_ROOT;
	}

	getDataAttributeComponent() {
		return this.#DATA_ATTRIBUTE_COMPONENT;
	}
}

export default BaseComponent;
