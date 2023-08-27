class BaseComponent {
	#HTML_EVENT_DELEGATION_ROOT_ELEMENT;
	#DATA_ATTRIBUTE_COMPONENT;

	constructor() {
		this.#DATA_ATTRIBUTE_COMPONENT = "data-mys-comp";
		this.#HTML_EVENT_DELEGATION_ROOT_ELEMENT = document.documentElement;
	}

	getRootElement() {
		return this.#HTML_EVENT_DELEGATION_ROOT_ELEMENT;
	}

	getDataAttributeComponent() {
		return this.#DATA_ATTRIBUTE_COMPONENT;
	}
}

export default BaseComponent;
