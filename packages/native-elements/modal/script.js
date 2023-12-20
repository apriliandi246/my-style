import EventDelegation from "../../js/utils/eventDelegation.js";

class Modal {
	#bodyElement;
	#rootElement;
	#modalDataAttr;
	#COMPONENT_NAME;
	#modalTargetDataAttr;
	#btnCloseDataAttr;
	#eventDelegationRootElement;

	constructor() {
		this.#COMPONENT_NAME = "modal";
		this.#modalDataAttr = "data-han-modal";
		this.#modalTargetDataAttr = "data-han-modal-target";
		this.#btnCloseDataAttr = "data-han-modal-btn-close";

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

			if (currentTargetElement !== null && currentTargetElementName === this.#COMPONENT_NAME) {
				const modalTargetDataAttr = currentTargetElement.getAttribute(this.#modalTargetDataAttr);
				const modalElement = document.querySelector(`[${this.#modalDataAttr}=${modalTargetDataAttr}]`);

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
		const modalElementDataAttr = modalElement.getAttribute(this.#modalDataAttr);
		const modalBtnCloseSelector = `[${this.#btnCloseDataAttr}=${modalElementDataAttr}]`;
		const modalBtnCloseElement = modalElement.querySelector(modalBtnCloseSelector);

		modalBtnCloseElement.addEventListener("click", () => {
			this.#close(modalElement);
		});
	}
}

new Modal();
