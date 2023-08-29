import EventDelegation from "../../event-delegation/index.js";

class Modal {
	#bodyElement;
	#rootElement;
	#COMPONENT_NAME;
	#modalTargetDataAttr;
	#modalBtnCloseDataAttr;
	#eventDelegationRootElement;

	constructor() {
		this.#COMPONENT_NAME = "modal";
		this.#modalTargetDataAttr = "data-mys-modal-target";
		this.#modalBtnCloseDataAttr = "data-mys-modal-btn-close";

		this.#bodyElement = document.body;
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
				const modalTargetDataAttr = currentTargetElement.getAttribute(this.#modalTargetDataAttr);
				const modalElement = document.getElementById(modalTargetDataAttr);

				this.#open(modalElement);
				this.#btnCloseModal(modalElement);
			}
		});
	}

	#open(modalElement) {
		this.#bodyElement.style.setProperty("overlfow", "hidden");
		modalElement.showModal();
	}

	#close(modalElement) {
		modalElement.close();
		this.#bodyElement.style.removeProperty("overflow");
	}

	#btnCloseModal(modalElement) {
		const modalElementIdAttr = modalElement.getAttribute("id");
		const modalBtnCloseSelector = `[${this.#modalBtnCloseDataAttr}=${modalElementIdAttr}]`;
		const modalBtnCloseElement = modalElement.querySelector(modalBtnCloseSelector);

		modalBtnCloseElement.addEventListener("click", () => {
			this.#close(modalElement);
		});
	}
}

new Modal();
